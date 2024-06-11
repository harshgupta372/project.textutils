import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btnText, setBtnText] = useState("enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtnText("enable light mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText("enable Dark mode");
    }
  };

  return (
    <div className='container' style={myStyle}>
      <h1>ABOUT US</h1>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is this project about?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                This project is a React application demonstrating the use of state
                management, basic styling, and the Bootstrap accordion component.
                It allows users to toggle between light and dark modes and
                displays informative content within accordions.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What technologies are used?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                This application is built with React, a popular JavaScript
                library for building user interfaces. It also utilizes the
                Bootstrap framework for styling components and creating the
                accordion functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I use this project?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                This project is primarily for demonstration purposes. You can
                clone the repository, install dependencies, and run the
                application locally to see it in action. Feel free to explore the
                code and experiment with different functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
