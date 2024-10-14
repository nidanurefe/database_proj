import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './layout';


const Travelled = () => {
    const [travelled, setTravelled] = useState([]);
    const [selectedTravel, setSelectedTravel] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('to-be-filled', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            setTravelled(response.data.data);
          })
          .catch(error => {
            console.error("There was an error fetching the travels!", error);
          });
      }, []);

      const handleTravelClick = (travel) => {
        setSelectedTravel(travel);
      };

      const closeDetails = () => {
        setSelectedTravel(null);
      }

      return(
        <Layout>
            <div className = "travel-list">
                {travelled.map(travelled => (
                    <div key={travelled.id} onClick={() => handleTravelClick(travelled)}>
                        <h3>{travelled.title}</h3>
                        <p>{travelled.city}</p>
                    </div>
                ))}

            </div>
        </Layout>
      )


}

export default Travelled;