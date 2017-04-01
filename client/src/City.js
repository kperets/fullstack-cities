/**
 * Created by kperets on 01/04/2017.
 */

import React, { Component } from 'react';

class City extends Component {
  render () {
    return (
      <li key={this.props.city.name}>
        <strong>{this.props.city.name}</strong> - {this.props.city.population}
      </li>
    );
  }
}

export default City;