// layout.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/layout.css';
import logo from './logo.png';
import defaultProfilePic from './ai-nida.jpg';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import PersonIcon from '@mui/icons-material/Person';import LogoutIcon from '@mui/icons-material/Logout';
import TourIcon from '@mui/icons-material/Tour';
import AddCircleIcon from '@mui/icons-material/AddCircle';const Layout = ({ children }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  return (
    <div className="wrapper">
      <div className="sidebar" data-background-color="black" data-image="./assets/img/sidebar-2.jpg">
        <a href="/">
          <img style={{ width: '90%', margin: 'auto' }} src={logo} alt="Logo" className="logo" />
        </a>
        <ul>
          <li className="nav-link" style={{ listStyle: 'none', display: 'flex' }}>
            <a className="nav-link" href="/favourite-movies">
              <CameraRollIcon style={{ margin: 'auto', paddingRight: '10px' }}/>
              <p>Favourite Movies</p>
            </a>
          </li>
          <li className="nav-link">
            <a className="nav-link" href="/favourite-people">
              <PersonIcon style={{ margin: 'auto', paddingRight: '10px' }}/>
              <p>Favourite People</p>
            </a>
          </li>
          
          <li className="nav-link">
            <a className="nav-link" href="/add-new">
              <AddCircleIcon style={{ margin: 'auto', paddingRight: '10px' }}/>
              <p>Add New</p>
            </a>
          </li>
          <li className='nav-link' >
            <a className="nav-link" href="#" onClick={handleLogout}> 
              <LogoutIcon style={{ margin: 'auto', paddingRight: '10px' }}/>
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="main-panel">
        <a href="/profile">
          <img src={defaultProfilePic} alt="Profile" />
        </a>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
