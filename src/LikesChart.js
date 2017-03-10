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
<div className="chart">
<h2 className="info"> Likes per Provider </h2>
        <Chart
          chartType="PieChart"
          data={[['Provider', 'Provider total likes'],
              ['Facebook',  (provider_likes.facebook)],
              ['Instagram', (provider_likes.instagram)],
              ['Tumblr', (provider_likes.tumblr)],
              ['Twitter',  (provider_likes.twitter)]]}

          options={{pieHole: 0, colors: ['#3b5998', '#fb3958', '#939393', '#4099ff'], backgroundColor: "#000000", pieSliceText: "label", legend: 'none'}}
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
