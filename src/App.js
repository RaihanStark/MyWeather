import React, { Component } from "react";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";
import Axios from "axios";
import "./entry.scss";

import TempToggle from "./components/TempToggle/TempToggle";

class App extends Component {
  state = {
    city: "jakarta",
    data: [],
  };

  DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  componentDidMount() {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=64d076ca6ef5b81f2af42f681f245c17&units=metric`
    ).then((res) => {
      // console.log(res.data.list);
      let min_temp = [];
      let max_temp = [];
      let day = 1;
      for (const [index, i] of res.data.list.entries()) {
        min_temp.push(i.main.temp_min);
        max_temp.push(i.main.temp_max);
        if ((index + 1) % 8 === 0) {
          let day_num = new Date(i.dt_txt.split(" ")[0]).getDay();
          this.setState({
            data: [
              ...this.state.data,
              {
                day: this.DAYS[day_num].slice(0, 3),
                weather: i.weather[0].main,
                min: Math.min(...min_temp),
                max: Math.max(...max_temp),
              },
            ],
          });

          // reset data
          min_temp = [];
          max_temp = [];
          day++;
        }
      }
    });
  }

  render() {
    return (
      <Layout>
        <TempToggle></TempToggle>
        <ForecastPanel data={this.state.data} />
      </Layout>
    );
  }
}

export default App;
