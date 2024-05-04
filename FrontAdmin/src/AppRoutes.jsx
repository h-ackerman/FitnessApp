
import { Routes, Route } from 'react-router-dom';
import Meal from './meals/Meal'
import AddMeal from './meals/AddMeal';
import ViewMeal from './meals/ViewMeal';
import EditMeal from './meals/EditMeal'
import SideBar from './layouts/SideBar'
import ActivityList from './activities/ActivityList';
import Addactivity from './activities/Addactivity';
import Editactivity from './activities/Editactivity';
export default function AppRoutes() {
  return (
    <div>
    <Routes>
      
        <Route exact path="/meal" element={<Meal/>} />
        <Route exact path="/addmeal" element={<AddMeal />} />
        <Route path="/viewmeal/:id?" element={<ViewMeal />} />
        <Route path="/editmeal/:id?" element={<EditMeal />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/activitylist" element={<ActivityList />} />   
        <Route path="editactivity" element={<Editactivity/>} />      
        <Route exact path="/addactivity" element={<Addactivity />} />
      


      </Routes>     
    </div>
  )
}
