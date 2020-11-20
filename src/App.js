import React, { Component } from "react";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";
import Axios from "axios";
import "./entry.scss";

import Header from "./components/Header/Header";

class App extends Component {
  state = {
    city: "jakarta",
    data: [],
    today_data: {},
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

  getApiUrl = (city, type, lat = null, long = null) => {
    if (lat != null && long != null) {
      return `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${long}&appid=64d076ca6ef5b81f2af42f681f245c17&units=${
        this.state.units === "c" ? "metric" : "imperial"
      }`;
    }
    return `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=64d076ca6ef5b81f2af42f681f245c17&units=${
      this.state.units === "c" ? "metric" : "imperial"
    }`;
  };

  componentDidMount() {
    // this.getLocation();
    this.updateWeather(this.state.city);
  }

  updateWeather = (city, lat = null, long = null) => {
    // Get Current
    Axios.get(this.getApiUrl(city, "weather", lat, long)).then((res) => {
      this.setState({ today_data: res.data });
    });

    // Get Forecast
    Axios.get(this.getApiUrl(city, "forecast", lat, long)).then((res) => {
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
            weather: i.weather[0].icon,
            min: Math.min(...min_temp),
            max: Math.max(...max_temp),
          });

          // reset data
          min_temp = [];
          max_temp = [];
          day = day + 1;
        }
        this.setState({
          data: data,
          city: res.data.city.name,
        });
      }
    });
  };

  switchTempsUnit = () => {
    let toggleTo = this.state.units === "c" ? "f" : "c";

    let data = this.state.data;
    let today_data = this.state.today_data;

    let convertedData = [];
    // convert forecast
    for (const i of data) {
      i.min = this.convertTempTo(toggleTo, i.min).toFixed(2);
      i.max = this.convertTempTo(toggleTo, i.max).toFixed(2);
      convertedData.push(i);
    }

    // convert current day
    today_data.main.temp = this.convertTempTo(
      toggleTo,
      today_data.main.temp
    ).toFixed(2);

    this.setState({
      units: toggleTo,
      data: convertedData,
      today_data: today_data,
    });
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

  getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log();
        this.updateWeather(
          this.state.city,
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      // Sidebar Inside Layout
      <Layout
        changeCityHandler={this.changeCity}
        city={this.state.data.length > 1 ? this.state.city : null}
        today_data={this.state.today_data}
        locateHandler={this.getLocation}
      >
        {/* Dashboard */}
        <Header units={this.state.units} toggled={this.switchTempsUnit} />
        <ForecastPanel data={this.state.data} />
      </Layout>
    );
  }
}

export default App;
