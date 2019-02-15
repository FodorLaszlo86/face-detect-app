import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a4b7f4973a6f44c48e8d2e0e68f9ad64'
})


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
  constructor() {
    super();

    this.state = {
      input: '',
      imageURL: ''
    }
  }



  onInputChange = (event) => {
    this.setState({ 
      input: event.target.value
    });
  }

  onBtnSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://www.raaskalderij.be/wp-content/uploads/lachende-mensen.jpg?w=640')
    .then((res) => console.log(res.outputs[0].data.regions[0].region_info.bounding_box))
    .catch(() => console.log('Something not okay'))
  }

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
       <ImgLinkForm 
            onInputChange={ this.onInputChange }
            onBtnSubmit={ this.onBtnSubmit } /> 
       <FaceRecognition imageURL={ this.state.imageURL } />
      </div>
    );
  }
}

export default App;
