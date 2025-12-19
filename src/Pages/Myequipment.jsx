import React, { useState, useEffect } from 'react'
import { Table } from 'antd'

const Myequipment = () => {
  const [myEquipment, setMyEquipment] = useState([])

  const fetchMyEquipment = async () => {
    // Placeholder for fetching user's equipment
    setMyEquipment([
      { _id: '1', name: 'Tractor Model X', category: 'tractor', status: 'Rented', returnDate: '2025-01-15' },
      { _id: '2', name: 'Harvester Y', category: 'harvester', status: 'Pending', returnDate: 'N/A' },
    ])
  }

  useEffect(() => {
    fetchMyEquipment()
  }, [])

  const columns = [
    {
      title: 'Equipment Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Return Date',
      dataIndex: 'returnDate',
      key: 'returnDate',
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Equipment</h1>
      <Table columns={columns} dataSource={myEquipment} rowKey="_id" />
    </div>
  )
}

export default Myequipment