import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form, Input, InputNumber, Select, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const { Option } = Select

const ManageEquipment = () => {
  const [equipment, setEquipment] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [form] = Form.useForm()

  const fetchEquipment = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/equipment')
      const data = await response.json()
      setEquipment(data)
    } catch {
      message.error('Failed to fetch equipment')
    }
  }

  useEffect(() => {
    fetchEquipment()
  }, [])

  const handleAdd = () => {
    setEditingItem(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleEdit = (record) => {
    setEditingItem(record)
    form.setFieldsValue(record)
    setIsModalVisible(true)
  }

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token')
      await fetch(`http://localhost:5000/api/equipment/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      message.success('Equipment deleted successfully')
      fetchEquipment()
    } catch {
      message.error('Failed to delete equipment')
    }
  }

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem('token')
      const url = editingItem
        ? `http://localhost:5000/api/equipment/${editingItem._id}`
        : 'http://localhost:5000/api/equipment'
      const method = editingItem ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values)
      })

      message.success(`Equipment ${editingItem ? 'updated' : 'added'} successfully`)
      setIsModalVisible(false)
      fetchEquipment()
    } catch {
      message.error(`Failed to ${editingItem ? 'update' : 'add'} equipment`)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="equipment" className="w-16 h-16 object-cover rounded" />,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Condition',
      dataIndex: 'condition',
      key: 'condition',
    },
    {
      title: 'Available',
      dataIndex: 'available',
      key: 'available',
      render: (available) => available ? <span className="text-green-600">Yes</span> : <span className="text-red-600">No</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Equipment</h1>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        Add Equipment
      </Button>
      <Table columns={columns} dataSource={equipment} rowKey="_id" />

      <Modal
        title={editingItem ? 'Edit Equipment' : 'Add Equipment'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter equipment name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select>
              <Option value="tractor">Tractor</Option>
              <Option value="harvester">Harvester</Option>
              <Option value="plow">Plow</Option>
              <Option value="sprayer">Sprayer</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Price per day"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="condition"
            label="Condition"
            rules={[{ required: true, message: 'Please select condition' }]}
          >
            <Select>
              <Option value="New">New</Option>
              <Option value="Good">Good</Option>
              <Option value="Fair">Fair</Option>
              <Option value="Poor">Poor</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="image"
            label="Image URL"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="available"
            label="Available"
            valuePropName="checked"
            initialValue={true}
          >
            <Input type="checkbox" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingItem ? 'Update' : 'Add'} Equipment
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ManageEquipment
