import React from "react";
import "../styles/styles.css";
import "../styles/classInfoPage.css";
import "../styles/navbar.css";

const ClassInfoPage: React.FC = () => {
  return (
  <div className="class-info-wrapper">
      <div className="class-info-container">
        <h1>Class Information</h1>
        <div className="class-info-column">
           <img src="https://via.placeholder.com/300x300" alt="Placeholder" />
          </div>
        <div className="class-info-columns">
          <div className="class-info-column">
            <h2>'Class Name' 
            </h2>
            <h3>Description:
              <p>Dynamic text will go here</p>
            </h3>
            <h3>Instructor:
              <p>Dynamic text will go here</p>
            </h3>
            <h3>Time:
              <p>Dynamic text will go here</p>
            </h3>
          </div>
   
        </div>
        <div className="class-info-buttons">
          <button className="join-class-button">Join The Class</button>
          <button className="different-class-button">Pick A Different Class</button>
        </div>
      </div>
      </div>
  );
};

export default ClassInfoPage;