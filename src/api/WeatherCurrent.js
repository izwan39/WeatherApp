
import React, {Component} from 'react';
import moment from "moment";
import 'moment-timezone';

class WeatherCurrent {

    constructor() {
    }

  getWeather(caller) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${caller.state.country}&units=metric&appid=b0300a1428159f7055d894b4dee537a3`;
    caller.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // ROUND TO THE CLOSEST DECIMAL POINT
        var temp = Math.round(res.main.temp);
        var weather = res.weather[0].main;
        var timestamp = res.dt;
        // SET TIMEZONE TO SINGAPORE
        var t = moment.unix(timestamp).tz('Asia/Singapore');
        // FORMAT DATE
        // FIXME - GET THE 'SGT' INSTEAD OF +08
        var formattedDate = t.format("ddd, DD MMM YYYY hh:mm A z");
        
        caller.setState({
          currentDateTime: formattedDate,
          currentTemperature: temp,
          currentWeather: weather,
        });
      })
      .catch(error => {
        caller.setState({ error, loading: false });
      });
  }
}

export default new WeatherCurrent();