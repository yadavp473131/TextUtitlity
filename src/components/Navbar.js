
import React from 'react'
import PropTypes from 'prop-types'
// import {a} from 'react-router-dom';
export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="/">{props.title}</a>
      <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
        <span className="navbar-hrefggler-icon"></span>
      </buthrefn>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active text-light" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a text-light" href="/about">{props.about}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-a dropdown-hrefggle text-light" href="/" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.hrefggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check form-switch text-light" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {title:PropTypes.string.isRequired,
         about: PropTypes.string.isRequired};

Navbar.defaultProps = {
    title: 'set title here',
    about : 'About text here'
};