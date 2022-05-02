// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark mode';
      showAlert("Dark mode enable", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light mode';
      showAlert("light mode enable", "success");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter text here" mode={mode}/>
        </Route>
      </Switch>
      </div>
    </Router>
    </>
  )
}

export default App;
