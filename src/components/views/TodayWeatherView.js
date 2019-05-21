import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';

export default class TodayWeatherView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let caller = this.props.caller;

    return (
      <View style={styles.currentContainer}>
        <Text style={styles.currentDateTime}>{caller.state.currentDateTime}</Text>
        <Text style={styles.currentTemperature}>{caller.state.currentTemperature}</Text>
        <Text style={styles.currentWeather}>{caller.state.currentWeather}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  currentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    alignSelf: "stretch",
  },
  currentDateTime: {
    fontSize: 18,
    textAlign: 'center',
    color: "#000000",
    fontWeight: 'bold',
  },
  currentTemperature: {
    fontSize: 50,
    textAlign: 'center',
    color: "#000000",
    marginTop: 10,
  },
  currentWeather: {
    fontSize: 25,
    textAlign: 'center',
    color: "#808080",
  },
});
