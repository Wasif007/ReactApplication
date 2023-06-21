import React, { useState } from 'react'

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);
  const [redmode,setRedMode]= useState('white');
  const settingReddishMode=()=>{
    if(redmode==='white')
    {
      setRedMode('#FF0000');
      document.body.style.backgroundColor='#FF0000';
    }
    else {
      setRedMode('white');
      document.body.style.backgroundColor='white';
    }
  }
  const settingAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 
  const toggleButton=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      settingAlert("Dark Mode is enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else
    {
      setMode('light');
    document.body.style.backgroundColor='white';
    settingAlert("Light Mode is enabled","success");
    }
  }
  return (
  <>
  <Router>
<Navbar title="TextUtils" about="About Us" mode={mode} toggleButton={toggleButton} settingReddishMode={settingReddishMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
<Route path='/about' element={<About mode={mode}/>} />
<Route path='/' 
element={<TextForm heading="TextUtilization- WordCounter | Character Counter | UpperCase to LowerCase | LowerCase to UpperCase" settingAlert={settingAlert} mode={mode}/> } />
        		</Routes>


</div>
</Router>
    </>
    
  );
}

export default App;
