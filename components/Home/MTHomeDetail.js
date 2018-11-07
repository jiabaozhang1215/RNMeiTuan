import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class HomeDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={this.popToHome.bind(this)}
        >测试push页面</Text>
      </View>
    );
  }

  popToHome() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});