import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 125,
      desity: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Particles
          className='particles' 
          params={ particlesOptions }
        />
       <Navigation />
       <Logo />
       <Rank />
       <ImgLinkForm />

       {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
