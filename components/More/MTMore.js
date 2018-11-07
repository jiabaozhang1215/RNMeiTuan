import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{justifyContent: 'center', alignItems: 'center'}}>更多</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});