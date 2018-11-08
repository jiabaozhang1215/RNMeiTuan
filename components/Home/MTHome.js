import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, Alert, ScrollView} from 'react-native';
import HomeDetail from './MTHomeDetail';
import HomeNavBar from './MTHomeNavBar';
import HomeIconsView from './MTHomeIconsView';
import Api from '../../Api';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeNavBar />
        {/*首页内容*/}
        <ScrollView>
          <HomeIconsView icons={Api.menuInfo} />
        </ScrollView>
      </View>
    );
  }

  pushToHomeDetail() {
    this.props.navigator.push({
      component: HomeDetail,
      passProps:{from: 'Home', pageIndex: 0}
    });
  }

}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8e8e8'
	},
});