import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class LikesChart extends Component {

  render() {
    if(this.props.activities !== null){
      var provider_likes = {instagram: 0,
                       tumblr: 0,
                       facebook: 0,
                       twitter: 0};

      for(var i = 0; i < this.props.activities.length; i++){
        var activity = this.props.activities[i];
        provider_likes[activity.provider] += activity.activity_likes;
      }
      return (
<div className="Card">
        <Chart
          chartType="PieChart"
          data={[['Provider', 'Provider total likes'],
              ['Facebook',  (provider_likes.facebook)],
              ['Instagram', (provider_likes.instagram)],
              ['Tumblr', (provider_likes.tumblr)],
              ['Twitter',  (provider_likes.twitter)]]}

          options={{pieHole: 0.3, colors: ['#54c7dc', '#ef463f', '#83c059', '#dcbd8e'], title: 'Total Likes Per Provider', pieSliceText: "label",}}
          graph_id="DonutChart"
          width="100%"
          height="360px"

        />
        </div>
      )
    } else {
      return (<p>There is no data for a chart at the time</p>);
    }
  }


}

export default LikesChart;
