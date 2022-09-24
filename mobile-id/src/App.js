import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles.scss';

//pages
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Home from './components/Home/Home';

import useToken from './components/UserStorage/useToken';
import Navigation from './components/Navigation/Navigation';
import Devices from './components/Devices/Devices';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  const changeTheme = () => {
    // 👇️ use document.getElementById()
    const el = document.getElementById('my-element');
    console.log(el);
    this.el.nativeElement.className = 'dark-theme'; //light-theme
  };


  return (
    <div id="rootElement" className="wrapper">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/home" element={<Home />} />
          <Route path='/devices' element={<Devices />}></Route>

          {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;