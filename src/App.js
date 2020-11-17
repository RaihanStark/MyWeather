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
    units: "c",
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

  switchTempsUnit = () => {
    let toggleTo = this.state.units === "c" ? "f" : "c";
    console.log("convert to", toggleTo);

    let data = this.state.data;
    let convertedData = [];
    for (const i of data) {
      i.min = this.convertTempTo(toggleTo, i.min).toFixed(2);
      i.max = this.convertTempTo(toggleTo, i.max).toFixed(2);
      convertedData.push(i);
    }

    this.setState({ units: toggleTo, data: convertedData });
  };

  convertTempTo(toggleTo, number) {
    if (toggleTo === "c") {
      // f to c
      return ((number - 32) * 5) / 9;
    } else if (toggleTo === "f") {
      // c to f
      return (number * 9) / 5 + 32;
    }
  }

  render() {
    return (
      <Layout>
        <TempToggle
          selected={this.state.units}
          toggled={this.switchTempsUnit}
        ></TempToggle>
        <ForecastPanel data={this.state.data} />
      </Layout>
    );
  }
}

export default App;
