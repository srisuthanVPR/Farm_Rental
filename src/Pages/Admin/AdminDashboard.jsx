import React from 'react';
import { Layout, Menu, Breadcrumb, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Footer, Content } = Layout;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Top navigation menu
  const items1 = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Dashboard' },
  ];

  // Sidebar menu
  const items2 = [
    { key: 'sub1', label: 'Users', children: [{ key: '1', label: 'Manage Users' }] },
    { key: 'sub2', label: 'Equipment', children: [{ key: '2', label: 'Manage Equipment' }] },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === '1') navigate('/admin/manage-users');
    if (key === '2') navigate('/admin/manage-equipment');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Top Header */}
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      {/* Main Content Area */}
      <Layout>
        {/* Sidebar */}
        <Sider style={{ background: colorBgContainer }} width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['sub1']}
            style={{ height: '100%' }}
            items={items2}
            onClick={handleMenuClick}
          />
        </Sider>

        {/* Content */}
        <Layout style={{ padding: '0 24px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Home' }, { title: 'Dashboard' }]}
          />

          <Content
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-100 p-6 rounded shadow text-lg font-bold text-center">
                Total Users: 150
              </div>
              <div className="bg-blue-100 p-6 rounded shadow text-lg font-bold text-center">
                Total Equipment: 75
              </div>
              <div className="bg-yellow-100 p-6 rounded shadow text-lg font-bold text-center">
                Pending Requests: 20
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
