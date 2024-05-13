import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SideBar from './layouts/SideBar';
import { Space } from 'antd';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AppHeader from './layouts/AppHeader';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OAuth2RedirectHandler from './pages/oauth2/OAuth2RedirectHandler';
import NotFound from './components/NotFound';
import LoadingIndicator from './components/LoadingIndicator';
import { getCurrentUser } from './utils/UserApi';
import { ACCESS_TOKEN } from './utils/constants';
import Home from './components/Home';
import Meal from './meals/Meal'
import AddMeal from './meals/AddMeal';
import ViewMeal from './meals/ViewMeal';
import EditMeal from './meals/EditMeal'
import ActivityList from './activities/ActivityList';
import Addactivity from './activities/Addactivity';
import Editactivity from './activities/Editactivity';
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    alert("You're safely logged out!");
    navigate('/');
};

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <div className="app">
      <div className="app-top-box">
        {/* This is the navbar of all the app */}
        <AppHeader authenticated={authenticated} onLogout={handleLogout} />
      </div>

      <div className="app-body">
        <Space>
          <div className="d-flex">
            {/* This is the sidebar */}
            <SideBar />
            <div className="flex-grow-1">
              {/* These are the routes for all the app */}
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login authenticated={authenticated} />} />
                <Route path="/signup" element={<Signup authenticated={authenticated} />} />
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />}></Route>
                <Route element={<NotFound />}></Route>
                <Route exact path="/meal" element={<Meal />} />
                <Route exact path="/addmeal" element={<AddMeal />} />
                <Route path="/viewmeal/:id?" element={<ViewMeal />} />
                <Route path="/editmeal/:id?" element={<EditMeal />} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path="/activitylist" element={<ActivityList />} />
                <Route path="editactivity" element={<Editactivity />} />
                <Route exact path="/addactivity" element={<Addactivity />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </Space>


      </div>
    </div>
  );
}

export default App;
