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
  <div className="provider"><i className={"card-social__icon fa fa-"+ provider }></i></div>
  <div className="user"><img src={activity.actor_avator} alt="avatar"></img></div>
  <div className="details">
  <h1>{activity.actor_name}</h1>
  <h2><a target="_blank" href={activity.actor_url}>@{activity.actor_username}</a></h2>
  </div>
  <div className="count">
      <ul>
        <li className="likes">{activity.activity_likes}<span>Likes</span></li>
        <li className="comments">{activity.activity_comments}<span>Comments</span></li>
        <li className="shares">{activity.activity_shares}<span>Shares</span></li>
      </ul>
    </div>
      </div>
      </div>
      );

  }

}

export default Activity;
