import React,{useState} from 'react';
import './Dashboard.css'; // Mettez à jour le chemin d'importation
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';


function Dashboard() { // Renommez la fonction en Dashboard
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home />
      </div>
    );
  }
  
  export default Dashboard;