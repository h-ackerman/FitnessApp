import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PieChartOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function MenuList({ darkTheme }) {
  const navigate = useNavigate();

  const menuStyle = {
    background: darkTheme ? '#5041BC' : '#FFFFFF', // Adjust background color based on dark mode
    color: darkTheme ? '#FFFFFF' : '#000000', // Adjust text color based on dark mode
  };

  const menuItems = [
    { key: 'home', icon: <PieChartOutlined />, label: 'Dashboard' },
    { key: '/meal', icon: <DatabaseOutlined />, label: 'Meals' },
    { key: '/editmeal', icon: <HomeOutlined />, label: 'Activity' },
    { key: 'admin', icon: <UserOutlined />, label: 'Admin' },
  ];

  return (
    <Menu
      onClick={(e) => navigate(e.key)}
      className='menu-bar'
      theme={darkTheme ? 'dark' : 'light'}
      style={menuStyle}
      items={menuItems} // Use the `items` prop instead of `children`
    />
  );
}
