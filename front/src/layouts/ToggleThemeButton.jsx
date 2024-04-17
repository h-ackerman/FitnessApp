import React from 'react';
import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export default function ToggleThemeButton({ darkMode, setDarkMode }) {
  return (
    <div className='toggle-btn'>
      <Button onClick={setDarkMode}>
        {darkMode ? <SunOutlined /> : <MoonOutlined />}
      </Button> 
    </div>
  );
}
