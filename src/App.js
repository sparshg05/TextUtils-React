// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');            //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);            //We are making Alert is an object

  const showAlert = (message,type)=>{                   //This function will show the alert
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#40476e'; 
      showAlert("Dark mode has been enabled","success");
      // document.title="TextUtils - Dark Mode";                                  //Update the title on changing the mode
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","success");
      // document.title="TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/*<Navbar />*/}
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
      {/* Exact path matches to the exact location */}
            <Route exact path="/about">                            
              <About mode={mode} />
            </Route>
            
            <Route exact path="/">
              <TextForm heading="TextUtils-Word counter, Character counter" mode={mode} showAlert={showAlert} />
            </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;