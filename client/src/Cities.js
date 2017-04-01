/**
 * Created by kperets on 01/04/2017.
 */

import React, { Component } from 'react';
import City from './City'

class Cities extends Component {
  render () {
    let cities = []
    if(this.props.cities){
      cities = this.props.cities.map(city => {
        return <City key={city.name} city={city} />
      });
    }

    return (
      <div className="Cities">
        {cities}
      </div>
    );
  }
}

export default Cities;