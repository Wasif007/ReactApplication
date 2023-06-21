import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* <div className="d-flex" >
        <div className="bg-primary rounded mx-2" onClick={()=>props.toggleButton('primary')} style={{width:'30px',height:'30px',cursor:'pointer'}} />
        <div className="bg-danger rounded mx-2" onClick={()=>props.toggleButton('danger')} style={{width:'30px',height:'30px',cursor:'pointer'}} />
        <div className="bg-light rounded mx-2" onClick={()=>props.toggleButton('light')} style={{width:'30px',height:'30px',cursor:'pointer'}} />
        <div className="bg-success rounded mx-2" onClick={()=>props.toggleButton('success')} style={{width:'30px',height:'30px',cursor:'pointer'}} />

        </div> */}

      </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleButton} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      
       
    </div>
  </nav>
  )
}

Navbar.propTypes={
title:PropTypes.string.isRequired,
about:PropTypes.string
}
Navbar.defaultProps = {
    title: 'Enter Title here',
    about: 'Enter about Us here'
  };