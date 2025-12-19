import React from 'react'
import { Form, Input, InputNumber, Select, Button, message } from 'antd'

const { Option } = Select

const Addequipment = () => {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:5000/api/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (data.success) {
        message.success('Equipment added successfully')
        form.resetFields()
      } else {
        message.error(data.message || 'Failed to add equipment')
      }
    } catch (error) {
      console.error('Add equipment error:', error)
      message.error('Failed to submit request')
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Equipment</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            label="Equipment Name"
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
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price per Day"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} prefix="$" />
          </Form.Item>

          <Form.Item
            name="condition"
            label="Condition"
            rules={[{ required: true, message: 'Please select condition' }]}
            initialValue="Good"
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
            <Input placeholder="http://example.com/image.jpg" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Equipment
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Addequipment