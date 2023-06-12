import React, { useState } from 'react'

import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  const toggleButton=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      
    }
    else
    {
      setMode('light');
    document.body.style.backgroundColor='white';
    }
  }
  return (
  <>
<Navbar title="TextUtils" about="About Us" mode={mode} toggleButton={toggleButton}/>
<div className="container my-3">
<TextForm heading="Enter text here to be analyzed" mode={mode}/> 
{/* <About/>  */}
</div>
    </>
    
  );
}

export default App;
