import React from 'react'

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to the Agriculture Rental Management System. We provide a platform for farmers and agricultural professionals to rent equipment easily and efficiently.
        </p>
        <p className="text-lg mb-4">
          Our mission is to support the agricultural community by offering access to high-quality equipment without the need for large capital investments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
            <p>We ensure all equipment is well-maintained and ready for use.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
            <p>Simple and intuitive booking process for all users.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p>Dedicated support team to assist with any queries.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
