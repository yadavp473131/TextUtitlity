import React from 'react';
import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
function App() {
  
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
     setAlert({
      msg : message,
      type: type
     } )
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text-Utils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Text-Utils - Light Mode';
    }
  }
  return (
    <>
 <BrowserRouter>  
<Navbar title = "TextUtils"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
{/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}

    {/* <About mode={mode}/>       */}
    
  <div className="container my-3">  
    {/* <switch> */}
    <Routes>
      <Route path="/about" element={<About/>}/>
      
     <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> 
        
       
       </Routes>
     {/* </switch>  */}
     </div>
     
     </BrowserRouter> 
    </>
  );
}

export default App;
