import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from '../components/navigation/navigation.js';
import Logo from '../components/logo/logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition.js';
import Rank from '../components/Rank/Rank.js';

const app = new Clarifai.App({
 apiKey: 'd17dd7acf5334c01baf23f6c4de0468d'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density : {
        enable: true,
        value_area: 300
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log("heeey, this finallly works!",response.outputs[0].data.regions);
      // do something with response
    },
    function(err) {
      console.log("i don't like these errors",err);
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
