import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/Signin/SignIn';
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
      imageURL: '',
      box: {},
      route: 'signin'
    }
  }



calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  console.log(clarifaiFace);
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  this.setState({ box: box})
  console.log(this.state.box);
}

  onInputChange = (event) => {
    this.setState({ 
      input: event.target.value
    });
  }

  onBtnSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, `${ this.state.input }`)
    .then((res) => this.displayFaceBox(this.calculateFaceLocation(res)))
    .catch((err) => console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
       <Particles
          className='particles' 
          params={ particlesOptions }
        />
       <Navigation onRouteChange={ this.onRouteChange } />
       { this.state.route === 'signin' ? 
            <SignIn onRouteChange={ this.onRouteChange } /> 
            :
            <div>
              <Logo />
              <Rank />
              <ImgLinkForm 
                    onInputChange={ this.onInputChange }
                    onBtnSubmit={ this.onBtnSubmit } /> 
              <FaceRecognition imageURL={ this.state.imageURL } box={ this.state.box } />
            </div>
        }
      </div>
    );
  }
}

export default App;
