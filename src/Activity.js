import React, { Component } from 'react';
import './App.css';

class Activity extends Component {

  constructor(props){
    super(props);
    this.state = this.props.activity;
  }

  render() {
    var activity = this.props.activity;
      return (
        <div className="Event">
          <div className="avatar"><img className="Avatar" src={activity.actor_avator}></img></div>
          <h4>Name: {activity.actor_name}</h4>
          <p>Handle: @{activity.actor_username}</p>
          <p> Provider: {activity.provider}</p>
          <p>About: {activity.actor_description}</p>
          <p><a href={activity.actor_url}>{activity.actor_url}</a></p>
          <p> Likes: {activity.activity_likes}</p>
          <p> Comments: {activity.activity_comments} </p>
          <p> Shares: {activity.activity_shares} </p>
        </div>
      );

  }

}

export default Activity;
