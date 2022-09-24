import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

//pages
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Home from './components/Home/Home';

import useToken from './components/UserStorage/useToken';
import Navigation from './components/Navigation/Navigation';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/home" element={<Home />} />

          {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;