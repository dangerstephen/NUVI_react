import React, { Component } from 'react';
import Activity from './Activity.js';
import './App.css';

class Activities extends Component {

  render() {
    if(this.props.activities === null){
      return (
        <div className="Card">
  <div className="provider"><i className="card-social__icon fa fa-search"></i></div>
  <div className="details">
  <h1>Searching For Posts...</h1>
  </div>
  <div className="count"></div>
      </div>
      );
    } else {
      return (
        <div className="">
          {this.props.activities.map(function(activity){
            return <Activity activity={activity} key={activity.id}/>
          })}
        </div>
      );
    }
  }

}

export default Activities;
