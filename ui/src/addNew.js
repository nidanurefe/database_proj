import React, { useState } from 'react';
import axios from 'axios';
import Layout from './layout';
import './styles/addNew.css';

const AddNew = () => {
  const [locationName, setLocationName] = useState({
    name: '',
    category: '',
    sub_category: '',
    city : '',
    country : '',
    visited_date: '',
    notes: '',
    photo_url: '',
    travelStatus: ''
  });




  return (
    <Layout>
    <div className="add-travel-container">
      <h2>Add New</h2>
      <form className="add-travel-form" >
        
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
        />
        
        
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="City"
          required
        />
        <label>Visited Date (Leave null if on future routes)</label>
        <input
          type="text"
          name="visitedDate"
          placeholder="Visited Date"
        />

        

        <label>Notes</label>
        <textarea
            name="notes"
            placeholder="Notes"
        />


      



        {/* <div className="cover-selection">
          <h3>Select Cover</h3>
          <div className="cover-images">
            {coverImages.map((cover) => (
              <img
                key={cover.id}
                src={cover.src}

                alt={cover.alt}
                onClick={() => handleCoverSelect(cover.id)}
                style={{
                  border: selectedCover === cover.id ? '2px solid blue' : '2px solid transparent',
                  cursor: 'pointer',
                  width: '100px',
                  height: '150px',
                }}
              />
            ))}
          </div>
          <div >
            <label>Or upload your own cover:</label>
            <br></br>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
        </div> */}
        <button type="submit">Save</button>
      </form>
    </div>
    </Layout>
  );
};


export default AddNew;