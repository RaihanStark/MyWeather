import React, { Component } from "react";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";
import Axios from "axios";
import "./entry.scss";

import TempToggle from "./components/TempToggle/TempToggle";

import styled from "styled-components";

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

  Toggler = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  TextLink = styled.div`
    color: ${(props) => (props.active ? "black" : "#a4a6ac")};
    font-size: 1.3em;
    font-weight: 600;
    border-bottom: ${(props) => (props.active ? "black solid 2px" : "none")};
  `;

  componentDidMount() {
    this.updateWeather(this.state.city);
  }

  updateWeather = (city) => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=64d076ca6ef5b81f2af42f681f245c17&units=metric`
    ).then((res) => {
      let min_temp = [];
      let max_temp = [];
      let day = 1;

      let data = [];
      for (const [index, i] of res.data.list.entries()) {
        min_temp.push(i.main.temp_min);
        max_temp.push(i.main.temp_max);
        if ((index + 1) % 8 === 0) {
          let day_num = new Date(i.dt_txt.split(" ")[0]).getDay();
          data.push({
            day: this.DAYS[day_num].slice(0, 3),
            weather: i.weather[0].main,
            min: Math.min(...min_temp),
            max: Math.max(...max_temp),
          });

          // reset data
          min_temp = [];
          max_temp = [];
          day++;
        }
        this.setState({ data: data });
      }
    });
  };

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

  changeCity = (city_target) => {
    this.setState({ city: city_target, data: [] });
    this.updateWeather(city_target);
  };

  render() {
    return (
      <Layout changeCityHandler={this.changeCity}>
        <this.Toggler>
          <div className="d-flex">
            <this.TextLink>Today</this.TextLink>
            <this.TextLink className="ml-4" active>
              Week
            </this.TextLink>
          </div>

          <div className="d-flex">
            <TempToggle
              selected={this.state.units}
              toggled={this.switchTempsUnit}
            ></TempToggle>
          </div>
        </this.Toggler>

        <ForecastPanel data={this.state.data} />
      </Layout>
    );
  }
}

export default App;
