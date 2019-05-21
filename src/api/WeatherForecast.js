
import React, {Component} from 'react';
import moment from "moment";
import 'moment-timezone';

class WeatherForecast {

    constructor() {
    }

    getWeather(caller) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${caller.state.country}&units=metric&appid=b0300a1428159f7055d894b4dee537a3`;
    caller.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        var newList = [];
        var list = res.list
        list.forEach(element => {
          // ROUND TEMPERATURES TO THE CLOSEST DECIMAL
          var temp_min = Math.round(element.main.temp_min);
          var temp_max = Math.round(element.main.temp_max);
          var weather = element.weather[0].main;
          var timestamp = element.dt;
          // SET TIMEZONE TO SINGAPORE
          var t = moment.unix(timestamp);
          // FORMAT DATE
          var formattedDate = t.tz('Asia/Singapore').format("DD MMM YYYY, ddd");
          var hour = t.utc().format("H");
          // ONLY GET A SINGLE RECORD IE 9 AM
          if(hour == 0) {
            var child = {};
            child.temp_min = temp_min;
            child.temp_max = temp_max;
            child.weather = weather;
            child.date = formattedDate;
            newList.push(child);
          }
        });
        caller.setState({
          dataSource: newList,
          error: res.message || null,
          loading: false,
        });
      })
      .catch(error => {
        caller.setState({ error, loading: false });
      });
  }
}

export default new WeatherForecast();