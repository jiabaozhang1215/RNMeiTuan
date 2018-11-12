import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HomeSpecialItem from './MTHomeSpecialItem';

const Home_D4_Data = require('../../LocalData/XMG_Home_D4.json').data;
const { width, height } = Dimensions.get('window');

export default class HomeSalesView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.rendrTopView()}
        <View style={styles.bottomStyle}>
          {this.renderBottomView()}
        </View>
      </View>
    );
  }

  rendrTopView() {
    return (
      <View style={styles.topStyle}>
        <View style={{marginLeft:15}}>
          <Text style={{color:'orange',fontSize:20}}>最高立减30元</Text>
          <Text style={{color:'gray',fontSize:13, marginTop:10}}>新用户专享</Text>
        </View>
        <Image
          style={{width:145, height:65,marginRight:15}}
          source={require('../../images/nsj.png')}
        />
      </View>
    );
  }

  renderBottomView() {
    var items = [];
    for(var i = 0; i < Home_D4_Data.length; i++) {
      var itemData = Home_D4_Data[i];
      items.push(
        <HomeSpecialItem
          key={i}
          title={itemData.title}
          subTitle={itemData.deputytitle}
          rightImage={{uri: this.dealWithImageUrl(itemData.imageurl)}}
          titleColor={itemData.typeface_color}
        />
      );
    }
    return items;
  }

  dealWithImageUrl(url) {
    if (url.search('w.h') == -1) {
      return url;
    } else {
      return url.replace('w.h', '120.90');
    }
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  topStyle: {
    backgroundColor: 'white',
    height: 70,
    marginBottom: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomStyle: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});