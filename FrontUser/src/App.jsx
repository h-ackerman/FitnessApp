import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppHeader from './components/layout/AppHeader';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import OAuth2RedirectHandler from './pages/oauth2/OAuth2RedirectHandler';
import NotFound from './components/common/NotFound';
import LoadingIndicator from './components/common/LoadingIndicator';
import { getCurrentUser } from './utils/UserApi';
import { ACCESS_TOKEN } from './utils/constants';
import Sex from './pages/SexPage/Sex';
import Age from './pages/AgePage/Age';
import Weight from './pages/WeightPage/Weight';
import Height from './pages/HeightPage/Height';
import Goal from './pages/GoalPage/Goal';
import Dashboard from './pages/DashboardPage/Dashboard';
import WorkoutPage from './pages/WorkoutPage';
import { getCurrentUserId } from './utils/UserApi';
import { request } from './utils/UserApi';
import Sidebar from './components/layout/Sidebar';
import MealPage from './pages/MealPage';
import './App.css';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sex, setSex] = useState('');
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(160);
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  const saveData = async () => {
    try {
      const accountId = await getCurrentUserId();
      const userData = {
        sex: sex,
        age: age,
        height: height,
        weight: weight,
        goal: goal,
      };

      const response = await request({
        url: `http://localhost:8080/user/register/${accountId}`,
        method: 'POST',
        body: JSON.stringify(userData),
      });
      navigate("/dashboard")
      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

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
  };

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <AppHeader authenticated={authenticated} onLogout={handleLogout} />
      <div className="app">
        <Sidebar />
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login authenticated={authenticated} />} />
            <Route path="/signup" element={<Signup authenticated={authenticated} />} />
            <Route exact path="/profile" element={<Profile authenticated={authenticated} currentUser={currentUser} component={Profile} />}></Route>
            <Route exact path="/sex" element={<Sex setSex={setSex} />} />
            <Route exact path="/age" element={<Age age={age} setAge={setAge} />} />
            <Route exact path="/weight" element={<Weight weight={weight} setWeight={setWeight} />} />
            <Route exact path="/height" element={<Height height={height} setHeight={setHeight} />} />
            <Route exact path="/goal" element={<Goal goal={goal} setGoal={setGoal} saveData={saveData} />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />}></Route>
            <Route element={<NotFound />}></Route>
            <Route path="/workout" element={<WorkoutPage />} />
            <Route path="/meals" element={<MealPage />} />

          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;