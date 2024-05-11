import React,{useState} from 'react';
import './Dashboard.css'; 
import Home from './Home';


function Dashboard() { 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div className='grid-container'>
        <Home />
      </div>
    );
  }
  
  export default Dashboard;