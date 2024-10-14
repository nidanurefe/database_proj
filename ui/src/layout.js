import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/layout.css'
import logo from './logo.png';
import defaultProfilePic from './profile.jpg';

import MapIcon from '@mui/icons-material/Map';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LogoutIcon from '@mui/icons-material/Logout';
import TourIcon from '@mui/icons-material/Tour';

const Layout = ({ children }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };


  return (
    <div className="wrapper">
      <div className="sidebar" data-background-color="black" data-image="./assets/img/sidebar-2.jpg">
          <a  href="/">
            <img style={{ width: '90%', margin: 'auto'}} src={logo} alt="Profile" className="logo" />
          </a>
        <ul>
          
            <li className="nav-link" style = {{listStyle: 'none', display: 'flex'}}>
              <a className="nav-link" href="/past-trips">
                
                <MapIcon style = {{margin: 'auto', paddingRight: '10px'}}/>
                <p>Past Trips</p>
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-link" href="/journey-insights">
                
                <AutoGraphIcon style = {{margin: 'auto', paddingRight: '10px'}}/>
                <p>Journey Insights</p>
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-link" href="/future-destinations">
                <TourIcon style = {{margin: 'auto', paddingRight: '10px'}}/>
                <p> Future Destinations</p>
                
              </a>
            </li>
            
            
            <li className='nav-link' style={{marginTop: '200%'}}>
              <a className="nav-link" href="" onClick={handleLogout}> 
                
                <LogoutIcon style = {{margin: 'auto'}}/>
                <p>Logout</p>
              </a>
            </li>

          </ul>
          </div>

      <div className="main-panel">
    
        <a href = "/profile">
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