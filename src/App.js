import React, { Component } from 'react';
import Activities from './Activities.js';
import NavBar from './NavBar.js';
import LikesChart from './LikesChart.js';
import $ from '../node_modules/jquery/dist/jquery.js';
import './styles/App.css';

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
        <NavBar />
        <div id='chart-container'></div>
        <LikesChart activities={this.state.activities}/>
        <Activities activities={this.state.activities}/>
      </div>
    );
  }
}

export default App;
