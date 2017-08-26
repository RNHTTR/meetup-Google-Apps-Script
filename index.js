import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavBar, Header, Intro } from './header.js'
import { Video } from './videoPlayer.js'
import { Footer } from './footer.js'
import './index.css';

class Body extends Component {
  render() {

    const docsHref                = 'https://docs.google.com/spreadsheets/d/1W2aliG_-9qSxduUEiiAvbL-F7CPnnXmi-BgVNr9FhhU/edit?usp=sharing';
    const ssAppDocumentation      = 'https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app';
    const driveAppDocumentation   = 'https://developers.google.com/apps-script/reference/drive/drive-app';
    const mailAppDocumentation    = 'https://developers.google.com/apps-script/reference/mail/mail-app';
    const permissionDocumentation = 'https://developers.google.com/apps-script/reference/drive/permission';
    const accessDocumentation     = 'https://developers.google.com/apps-script/reference/drive/access';

    return (
      <div className='main'>
        <NavBar className='' />
        <Header className=''>
            <Intro className='' />
        </Header>
        <div className='box'>
          <a href={docsHref} className='boxed' target="_blank">Click here and make a copy of the linked Google Spreadsheet to follow along.</a>
        </div>
        <div className='video-container'>
          <Video  src='https://player.vimeo.com/video/230859844'/>
        </div>
        <h2>Some Apps Script Documentation</h2>
        <div className='bottom-box'>
          <a href={ssAppDocumentation} className='boxed' target="_blank">SpreadsheetApp</a>
          <a href={driveAppDocumentation} className='boxed' target="_blank">DriveApp</a>
          <a href={mailAppDocumentation} className='boxed' target="_blank">MailApp</a>
          <a href={permissionDocumentation} className='boxed' target="_blank">Permission</a>
          <a href={accessDocumentation} className='boxed' target="_blank">Access</a>
        </div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);
