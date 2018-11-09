import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import HomeNavBar from './MTHomeNavBar';
import HomeIconsView from './MTHomeIconsView';
import HomeSpecialView from './MTHomeSpecialView';
import HomeSalesView from './MTHomeSalesView';
import Api from '../../Api';

const HomeSpecialData = Api.HomeSpecialData;


export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeNavBar />
        {/*首页内容*/}
        <ScrollView>
          {/*分类*/}
          <HomeIconsView icons={Api.homeIcons} />
          {/*一元抢购*/}
          <HomeSpecialView
            dataLeft={HomeSpecialData.dataLeft}
            dataRight={HomeSpecialData.dataRight}
          />
          {/*减免优惠*/}
          <HomeSalesView />
        </ScrollView>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
});