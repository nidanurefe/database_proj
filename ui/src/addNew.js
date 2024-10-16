import React, { useState } from "react";

const AddNew = ({ visitedLocations }) => {
  const [formData, setFormData] = useState(visitedLocations);

  const handleChange = (e, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = e.target.value;
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <form className="locations-form" onSubmit={handleSubmit}>
      <h2>Visited Locations</h2>
      {formData.map((location, index) => (
        <div key={location.id} className="location-form-item">
          <h3>Location {index + 1}</h3>
          <label>Name</label>
          <input
            type="text"
            value={location.name}
            onChange={(e) => handleChange(e, index, "name")}
          />

          <label>Category</label>
          <input
            type="text"
            value={location.category}
            onChange={(e) => handleChange(e, index, "category")}
          />

          {location.sub_category && (
            <>
              <label>Sub-category</label>
              <input
                type="text"
                value={location.sub_category}
                onChange={(e) => handleChange(e, index, "sub_category")}
              />
            </>
          )}

          <label>City</label>
          <input
            type="text"
            value={location.location.city}
            onChange={(e) => handleChange(e, index, "location.city")}
          />

          <label>Country</label>
          <input
            type="text"
            value={location.location.country}
            onChange={(e) => handleChange(e, index, "location.country")}
          />

          <label>Visited Date</label>
          <input
            type="date"
            value={location.visited_date}
            onChange={(e) => handleChange(e, index, "visited_date")}
          />

          <label>Notes</label>
          <textarea
            value={location.notes}
            onChange={(e) => handleChange(e, index, "notes")}
          />

          {location.photos.map((photo, photoIndex) => (
            <div key={photoIndex} className="photo-section">
              <label>Photo URL</label>
              <input
                type="text"
                value={photo.url}
                onChange={(e) =>
                  handleChange(e, index, `photos[${photoIndex}].url`)
                }
              />
              <label>Photo Description</label>
              <input
                type="text"
                value={photo.description}
                onChange={(e) =>
                  handleChange(e, index, `photos[${photoIndex}].description`)
                }
              />
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNew;
