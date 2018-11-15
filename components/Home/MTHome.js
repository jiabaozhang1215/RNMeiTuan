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
  ScrollView,
} from 'react-native';
import HomeNavBar from './MTHomeNavBar';
import HomeIconsView from './MTHomeIconsView';
import HomeSpecialView from './MTHomeSpecialView';
import HomeSalesView from './MTHomeSalesView';
import HomeShopCenterView from './MTHomeShopCenterView';
import Api from '../../Api';

const HomeSpecialData = Api.HomeSpecialData;
const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);


export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeNavBar />
        {/*首页内容*/}
        <ScrollView
          style={{ marginBottom:(IsIphoneX?34:0) }}
        >
          {/*分类*/}
          <HomeIconsView icons={Api.homeIcons} />
          {/*一元抢购*/}
          <HomeSpecialView
            dataLeft={HomeSpecialData.dataLeft}
            dataRight={HomeSpecialData.dataRight}
          />
          {/*减免优惠*/}
          <HomeSalesView />
          {/*购物中心*/}
          <HomeShopCenterView
          />
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