/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Launch from './components/Launch/MTLaunch';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: '启动页', component: Launch}}
        configureScene={() => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}
