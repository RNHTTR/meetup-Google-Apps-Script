import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const navBarStyle = {
  height: 50,
  width:  '100%',
  backgroundColor: '#0f9d58',
  color: 'white',
  top: 0,
  position: 'fixed'
}

export function NavBar(props) {
    return (
      <div className='nav-bar' style={navBarStyle}>
        <div className='title'>
          <h3>Learn Google Apps Scripts: Sheets & MailApp</h3></div>
      </div>
    )
}

const headerStyle = {
  backgroundColor: '#0f9d58',
  width:  '100%',
  color: 'white'
}

export function Header(props) {
    return (
      <div className='header' style={headerStyle}>
          <Intro />
      </div>
    )
}

export function Intro(props) {
  return (
    // <div className='intro' style={introStyle} >
    <div className='intro'>
      <p><b>G Suite</b> is a cloud based collection of productivity tools.
         G Suite includes Gmail, Drive, Sheets, Docs, and more.
         &nbsp;<b>Google Apps Scripts</b> is a JavaScript-based scripting language that
         allows Google Drive users to shift their experience into (pardon
         the pun) <i>hyperdrive</i>.
      </p>
      <p className='intro-p'>Check out the video below for a quick sample which demonstrates using
         Google Apps Scripts to automatically distribute a Google Sheet via email.</p>
    </div>
  )
}
