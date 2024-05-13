import React,{useState} from 'react';
import './Dashboard.css'; 
import DashboardContent from './DashboardContent';


function Dashboard() { 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div className='grid-container'>
        <DashboardContent />
      </div>
    );
  }
  
  export default Dashboard;