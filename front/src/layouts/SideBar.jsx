import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import AppRoutes from '../AppRoutes';

const { Sider } = Layout;

export default function SideBar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log('Dark mode:', darkTheme ? 'Off' : 'On');
  };

  const siderStyle = {
    background: darkTheme ? '#5041BC' : '#ecb2ed', // Adjust background color based on dark mode
    transition: 'background 0.3s',
  };

  console.log('Sider style:', siderStyle);

  return (
    <>
      <Layout>
        <Sider
          className='sidebar'
          style={siderStyle}
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}>
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkMode={darkTheme} setDarkMode={toggleTheme} />
        </Sider>

        <Layout style={{background: 'red'}}
        className='l2'>
          <Button
            type='text'
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Layout>
      
      </Layout>
    </>
  );
}
