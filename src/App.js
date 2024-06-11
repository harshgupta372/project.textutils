import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
 
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
 

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      document.body.style.backgroundColor = 'white';
      setmode('light');
      showAlert('Light mode has been enabled', 'success');
    }
  };
 
   
  
    return (
      <>
        <div className="container my-3">
          <Navbar title="TEXTUTILS" mode={mode} togglemode={togglemode}   />
          <Alert alert={alert} /> {/* Pass the alert state as a prop */}
          <Textform showAlert={showAlert} heading="enter the text to analyze below" mode={mode}   />
        </div>
      </>
    );
  }
  
  export default App;
  


