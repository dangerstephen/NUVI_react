import React, { Component } from 'react';
import Activities from './Activities.js'
import $ from '../node_modules/jquery/dist/jquery.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: null
    }
  }

  componentDidMount() {
    $.get("https://nuvi-challenge.herokuapp.com/activities", function(data) {
      this.setState({
        activities: data
      });
    }.bind(this));
  }



  render() {
    return (
      <div className="App">
        <Activities activities={this.state.activities}/>
      </div>
    );
  }
}

export default App;
