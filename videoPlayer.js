import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './index.css';


export class Video extends Component {
  render () {
    return (
      <div className='video-wrapper'>
        <iframe src={this.props.src} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    )
    // return <ReactPlayer url={this.props.src}  controls />
  }
}
