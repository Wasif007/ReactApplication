import React, { useState } from 'react'

import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);
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
<Navbar title="TextUtils" about="About Us" mode={mode} toggleButton={toggleButton}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter text here to be analyzed" settingAlert={settingAlert} mode={mode}/> 
{/* <About/>  */}
</div>
    </>
    
  );
}

export default App;
