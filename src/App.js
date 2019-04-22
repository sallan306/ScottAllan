import React, { Component } from 'react';
import Site from "./Components/Site/Site.js"
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Site/>
      </ParallaxProvider>

    );
  }
}

export default App;
