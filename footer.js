import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const footerStyle = {
  bottom: 0,
  // position: 'fixed',
  backgroundColor: '#0f9d58',
  color: 'white',
  width: '100%',
  minHeight: 50
}

const contactStyle = {
  width: '69%',
  margin: 'auto',
  textAlign: 'center',
  // height: 50,
  paddingTop: 10,
  paddingBottom: 10
}

export function Footer(props) {
    return (
      <footer style={footerStyle}>
        <p className='contact' style={contactStyle}>If you're interested in learning more about Google Apps Scripts (or Google Sheets), contact Ryan@ExcellentActuary.com</p>
      </footer>
    )
}
