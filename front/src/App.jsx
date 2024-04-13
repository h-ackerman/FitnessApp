import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SideBar from './layouts/SideBar';
import AppRoutes from './AppRoutes';
import {Space} from 'antd';
import Meal from './meals/Meal';
import AddMeal from './meals/AddMeal';
import ViewMeal from './meals/ViewMeal';
import EditMeal from './meals/EditMeal';

function App() {
  return (
    <div className='App'>
<Space>  
  <SideBar/>
  <AppRoutes/>  
     
  </Space>
    
    </div>
  );
}

export default App;
