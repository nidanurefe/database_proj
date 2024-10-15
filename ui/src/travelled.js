import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './layout';
import './styles/travelled.css';


const Travelled = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
    
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     axios.get('to-be-filled', {
    //       headers: {
    //         'Authorization': `Bearer ${token}`
    //       }
    //     })
    //       .then(response => {
    //         setTravelled(response.data.data);
    //       })
    //       .catch(error => {
    //         console.error("There was an error fetching the travels!", error);
    //       });
    //   }, []);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/response.json');
        const data = await response.json();
        console.log(data);
        setLocations(data.visited_locations );
      };
      fetchData();
  }, []);

      

  const closeDetails = () => {
    setSelectedLocation(null);
  };

      return(
        <Layout>
            <div className="visited-locations">
      {/* <h2>Visited Locations</h2> */}
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-card"
            onClick={() => setSelectedLocation(location)}
          >
            <img src={location.photos[0].url} alt={location.name} />
            <p>{location.name}</p>
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDetails}>&times;</span>
            <img src={selectedLocation.photos[0].url} alt={selectedLocation.name}  style={{width: '100%'}}/>
            <h3>{selectedLocation.name}</h3>
            <p>{selectedLocation.description}</p>
          </div>
        </div>
      )}
    </div>
        </Layout>
      )


}

export default Travelled;