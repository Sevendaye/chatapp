import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Messages';

class App extends Component {
  render() {

    return (
      <div className="box">
        <div>
          <div className='messages'>
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <Formulaire />
      </div>
    );
  }
}

export default App;
