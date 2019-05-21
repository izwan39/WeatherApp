/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ActivityIndicator} from 'react-native';
import { Header } from "react-native-elements";
import WeatherCurrent from 'WeatherApp/src/api/WeatherCurrent';
import WeatherForecast from 'WeatherApp/src/api/WeatherForecast';
import TodayWeatherView from 'WeatherApp/src/components/views/TodayWeatherView';
import WeatherList from 'WeatherApp/src/components/lists/WeatherList';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      country: "Singapore",
      loading: false,
      currentDateTime: 'Wed, 11 Jan 2017 01:00 PM SGT',
      currentTemperature: 82,
      currentWeather: 'Thunderstorm',
    };
  }

  componentDidMount() {
    WeatherCurrent.getWeather(this);
    WeatherForecast.getWeather(this);
  }

  render() {
    if(this.state.loading) {
      return <ActivityIndicator animating size="large" />
    }
    else {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar 
          translucent={true} 
          backgroundColor="#FF0000"
        />
          <Header containerStyle={styles.titleContainer}
            centerComponent={{ text: 'Singapore, Singapore', style: styles.titleText }}
          />
          <View style={styles.container}>
            <TodayWeatherView caller={this} />
            <View style={styles.flatListContainer}>
              <WeatherList
                data={this.state.dataSource}
              />
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#FF0000',
  },
  titleText: {
    fontSize: 14,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 2,
    alignSelf: "stretch",
  },
});
