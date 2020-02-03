import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component{
  //const charData;
  constructor(){
    super();
    this.state = {
      //chartData:{}
      chartData:false
    }
  }

  componentDidMount(){
    this.getChartData();
  }

  getChartData(){
    // get data from API
    let url = 'https://homeexercise.volumental.com/sizingsample';
    let username = 'manager';
    let password = '12345';
    let headers = new Headers();
    headers.set('Authorization', "Basic " + btoa(username + ":" + password));
    fetch(url, {method:'GET',
        headers: headers,
       })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.data[0].sizes)
      this.setState ({
        //chartData : responseJson
        //chartData: {
          //labels:[responseJson.data.sizes]
          //labels:[5,6,7]
        //}
      })
    });

    this.setState({
     chartData:{
        labels: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        datasets: [
          {
            label: 'A',
            data: [0, 0, 0, 1, 1, 1, 0, 0, 0],
            backgroundColor: '#61d4b3'// green
          },
          {
            label: 'B',
            data: [0, 0, 1, 2, 3, 2, 2, 0, 0],
            backgroundColor: '#fdd365' // yellow
          },
          {
            label: 'C',
            data: [0, 2, 3, 4, 5, 4, 3, 2, 0],
            backgroundColor: '#fd2eb3' // red
          },
          {
            label: 'D',
            data: [0, 3, 4, 5, 7, 6, 4, 0, 0],
            backgroundColor: '#fb8d62' // red
          },
          {
            label: 'E',
            data: [0, 0, 0, 6, 8, 7, 5, 0, 0],
            backgroundColor: '#633a82' // red
          },

        ]
    }
    });
  }

  render(){
  return (

    <div className="App">

        <p>
          <Chart chartData={this.state.chartData} title='US' titlePosition='left' />
        </p>
    </div>
    );

  }

}

export default App;




