import React from "react";
import "./ForecastPanel.scss";

import Forecast from "./Forecast/Forecast";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
class ForecastPanel extends React.Component {
  state = {
    city: "jakarta",
    temps: []
  };

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
          this.setState({
            temps: [
              ...this.state.temps,
              {
                day: day,
                weather: i.weather[0].main,
                min: Math.min(...min_temp),
                max: Math.max(...max_temp)
              }
            ]
          });
          day++;
        }
      }
    });
  }

  render() {
    let data = <FontAwesomeIcon spin icon={faSync} size="3x" />;
    if (this.state.temps.length === 5) {
      console.log("loaded");
      data = this.state.temps.map((el, i) => {
        console.log(i.weather);
        return (
          <Forecast
            key={i}
            day={el.day}
            type={el.weather}
            highest={el.max}
            lowest={el.min}
          />
        );
      });
    }
    return <div className="panel">{data}</div>;
  }
}
export default ForecastPanel;
