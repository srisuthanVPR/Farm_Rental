import React, { useState, useEffect } from 'react'
import { Table, Tag } from 'antd'

const Rentalrequest = () => {
  const [requests, setRequests] = useState([])

  const fetchRequests = async () => {
    // Placeholder for fetching rental requests
    setRequests([
      { _id: '1', equipment: 'Tractor Model X', status: 'Approved', date: '2025-01-01' },
      { _id: '2', equipment: 'Harvester Y', status: 'Pending', date: '2025-01-05' },
      { _id: '3', equipment: 'Plow Z', status: 'Rejected', date: '2025-01-03' },
    ])
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const columns = [
    {
      title: 'Equipment',
      dataIndex: 'equipment',
      key: 'equipment',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'blue'
        if (status === 'Approved') color = 'green'
        if (status === 'Rejected') color = 'red'
        return <Tag color={color}>{status}</Tag>
      },
    },
    {
      title: 'Request Date',
      dataIndex: 'date',
      key: 'date',
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rental Requests</h1>
      <Table columns={columns} dataSource={requests} rowKey="_id" />
    </div>
  )
}

export default Rentalrequest