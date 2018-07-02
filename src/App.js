import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ClickBait from './Clickbait'
import Main from './Main'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <footer class="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 class="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;