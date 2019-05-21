import React, { Component } from "react";
import {StyleSheet, FlatList, View} from 'react-native';
import DailyWeatherItem from 'WeatherApp/src/components/listItems/DailyWeatherItem';

export default class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#D3D3D3",
        }}
      />
    );
  };

  _keyExtractor = (item, index) => item.id;


  render() {

    return (
      <FlatList
        style={styles.flatList}
        data={this.props.data}
        renderItem = {({ item }) => (
          <DailyWeatherItem item={item}/>
        )}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this._renderSeparator}
        
      />
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
