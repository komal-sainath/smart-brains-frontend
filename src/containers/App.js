import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from '../components/navigation/navigation.js';
import Logo from '../components/logo/logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../components/Rank/Rank.js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density : {
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
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
