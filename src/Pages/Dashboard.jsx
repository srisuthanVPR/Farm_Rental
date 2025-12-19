import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  const fetchEquipment = async () => {
    try {
      const response = await fetch('https://farrm-render-server2.onrender.com/api/equipment');
      const data = await response.json();
      setEquipmentList(data);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Available Equipment for Rent</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {equipmentList.map(item => (
          <div key={item._id} className="border rounded p-4 shadow bg-white">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
            )}
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-semibold text-green-600">${item.price}/day</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{item.category}</span>
            </div>
            <p className="text-sm text-gray-500">Condition: {item.condition}</p>
            <p className={`text-sm mt-2 ${item.available ? 'text-green-500' : 'text-red-500'}`}>
              {item.available ? 'Available' : 'Currently Rented'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;