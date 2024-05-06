// import AppRoutes from './AppRoutes';

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
// import PrivateRoute from './components/common/PrivateRoute';
import './App.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="app">
      <div className="app-top-box">
        <AppHeader authenticated={authenticated} onLogout={handleLogout} />
      </div>
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          {/* <PrivateRoute
            path="/profile"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Profile}
          ></PrivateRoute> */}
          <Route path="/login" element={<Login authenticated={authenticated} />} />
          <Route path="/signup" element={<Signup authenticated={authenticated} />} />
          <Route exact path="/profile" element={<Profile authenticated={authenticated} 
          currentUser={currentUser} 
          component={Profile}/>}>
          </Route>
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}></Route>
          <Route element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

