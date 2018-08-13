import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Row from './components/Row';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Homework </h1>
        </header>
        <p className="App-intro">
          <code>Clicky Game</code> 
        </p>
        <Container>
          <Row>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Row>
        </Container>


      </div>
    );
  }
}

export default App;