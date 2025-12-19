import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const ManageUsers = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    // Since there's no user management in backend yet, show placeholder
    setUsers([
      { _id: '1', name: 'John Doe', email: 'john@example.com', role: 'user' },
      { _id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    ])
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    // Placeholder for delete functionality
    message.success('User deleted successfully (placeholder)')
    setUsers(users.filter(user => user._id !== id))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <Table columns={columns} dataSource={users} rowKey="_id" />
    </div>
  )
}

export default ManageUsers
