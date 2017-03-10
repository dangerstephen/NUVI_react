import React, { Component } from 'react';
import './styles/App.css';

class Activity extends Component {

  constructor(props){
    super(props);
    this.state = this.props.activity;
  }

  render() {
    var activity = this.props.activity;
    var provider = activity.provider;
      return (
        <div className="col-md-6">
        <div className="Card">
  <div className="provider"><a target="_blank" href={"https://www."+ provider + ".com"}><i className={"card-social__icon fa fa-"+ provider + " "+ provider }></i></a></div>
  <div className="user"><img src={activity.actor_avator} alt="avatar"></img></div>
  <div className="details">
  <h1>{activity.actor_name}</h1>
  <h2><a target="_blank" href={activity.actor_url}>@{activity.actor_username}</a></h2>
  </div>
  <div className="count">
      <ul>
        <li>{activity.activity_likes}<span><i className="fa fa-heart-o likes" aria-hidden="true"></i></span></li>
        <li>{activity.activity_comments}<span><i className="fa fa-comments-o comments" aria-hidden="true"></i></span></li>
        <li>{activity.activity_shares}<span><i className="fa fa-retweet shares" aria-hidden="true"></i></span></li>
      </ul>
    </div>
      </div>
      </div>
      );

  }

}

export default Activity;
