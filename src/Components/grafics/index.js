import React, { Component } from 'react'
import { Doughnut, Line } from 'react-chartjs-2';

const data = {
  labels: [
      "Women",
      "Man",
      "Yellow"
  ],
  datasets: [
      {
          data: [300, 50, 100],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
      }]
};

var dataLine = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			//label: "Recruitment with genderX",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			//label: "recruitment without genderX",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 30, 35, 40, 48, 60, 85]
		}
	]
};

const options = {
  animation: {
      animateScale: true
  }
};

class Grafics extends Component {
  render () {
    return (
      <div style={{width: '700px', height: '700px'}}>
        <h2>GenderX results</h2>
        
        <Line
          data={dataLine} 
          width={100}
          height={50}
        />    
       
      </div>
    )
  }
}

export default Grafics