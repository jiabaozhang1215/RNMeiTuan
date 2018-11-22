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
import ShopCenterDetail from './MTShopCenterDetailView';
import GuessYouLikeView from './MTHomeGuessYouLikeView';
import Api from '../../Api';

const HomeSpecialData = Api.HomeSpecialData;
const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.pushToShopCenterDetail = this.pushToShopCenterDetail.bind(this);
  }

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
            shopCenterCallBack={(url, name) => this.pushToShopCenterDetail(url, name)}
          />
          {/*猜你喜欢*/}
          <GuessYouLikeView />
        </ScrollView>
      </View>
    );
  }

  pushToShopCenterDetail(url, name) {
    this.props.navigator.push({
      component: ShopCenterDetail,
      params: {pageUrl: this.dealWithUrl(url), pageTitle: name}
    });
  }

  dealWithUrl(url) {
    return url.replace('imeituan://www.meituan.com/web/?url=', '');
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
});