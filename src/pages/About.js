import React, { Component } from 'react';
import "./About.css";
import owenPic from '../images/owenPic.jpg'; 
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='split left'>
          <div className='centered'>
            <img className='profile_image' src={owenPic} alt="this is awkward..."></img>
          </div>
        </div>

        <div className='split right'>
          <div className='centered'>
            <div className='name_title'>Hi my name is Owen Trudt</div>
            <div className='brief_description'>
              I am a computer science and biology student at Rose-Hulman Insitute of technology. 
              I am also a collegiate athlete, I play men's soccer for Rose-Hulman. 
              In my free time when I am not drowning in school work, I love to play soccer, read books, thrift, play video games, 
              and watch movies/anime. 
              I also like to hangout with my friends and family. 
              I am a big supporter of Tottenham Hotspur (sadly). 
              My favorite book is Spring Snow by Yukio Mishima. 
              My favorite movie is Bladerunner 2049. 
              My favorite anime is Neon Genesis Evangelion. 
              My favorite anime movie is Weathering With You. 
            </div>
          </div>
        </div>

      </div>


      
    )
  }
}
