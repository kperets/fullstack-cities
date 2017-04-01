import React, { Component } from 'react';
import './App.css';
import Cities from './Cities'

class App extends Component {

  state = {cities: []}

  async componentDidMount(){
    const response = await fetch('/cities')
    const cities   = await response.json()

    this.setState({cities: cities})
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Cities & Population</h1>
        <Cities cities={this.state.cities} />
      </div>
    );
  }
}

export default App;
