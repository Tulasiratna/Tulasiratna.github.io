import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component{
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // get data from API
    this.setState({
      chartData:{
        labels: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        datasets: [
          {
            data: [
              2,
              3,
              4,
              6,
              8,
              7,
              5,
              2.5,
              1
            ],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ]
        }
      ]
    }
    });
  }
  render(){
  return (
    <div className="App">

        <p>
          <Chart chartData={this.state.chartData} location='US' />
        </p>
    </div>
    );
  }
}

export default App;




