import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
import { ListItem, Icon } from "react-native-elements";

export default class DailyWeatherItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;

    return (
    <ListItem
      title={item.date}
      titleStyle={{ color: '#000000', fontWeight: 'bold' }}
      subtitle={
        <View>
          <Text style={styles.temperatureRange}>{item.temp_min} - {item.temp_max}</Text>
          <Text style={styles.weather}>{item.weather}</Text>
        </View>
      }
      rightIcon={{ name: 'chevron-right', type: 'font-awesome', color:'#FF0000', size:15, style: { marginRight: 10 } }}
      //TODO - DISPLAY 3 HOURS INTERVALS WEATHER FOR THE PRESSED DATE EITHER DROPDOWN OR NEXT SCREEN
      onPress={() => {alert("should display the weather list of that day for 3 hours intervals")}}
    />
    )
  }
}

const styles = StyleSheet.create({
  temperatureRange: {
    color: "#000000"
  },
  weather: {
    
  },
});
