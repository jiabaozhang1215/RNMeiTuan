import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Main from '../Main/MTMain';

const {width, height} = Dimensions.get('window');

export default class Launch extends Component {
  render() {
    return (
      <Image style={{width: width, height: height}} source={require('../../images/launchimage.png')} />
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.replace({
        component: Main,
      });
    }, 1000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});