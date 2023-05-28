import React from 'react';
import "./sidebar.css";
import image1 from "../../../images/1.jpg"
import image2 from "../../../images/2.jpg"
import image3 from "../../../images/3.jpg"
import image4 from "../../../images/4.jpg"
import image5 from "../../../images/5.jpg"

function Sidebar() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
        // Add more image paths here
      ];

  return (
    <>
    <div className="sidebar">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="sidebarImage"
        />
      ))}
    </div>
    </>
  )
}

export default Sidebar