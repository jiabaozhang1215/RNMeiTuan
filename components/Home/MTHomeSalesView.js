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

const { width, height } = Dimensions.get('window');

export default class HomeSalesView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topViewStyle}>
          {this.renderTopView()}
        </View>
        <View style={styles.bottomViewStyle}>
          {this.renderBottomView()}
        </View>
      </View>
    );
  }

  renderTopView() {
    // return (
    //   <HomeSpecialItem
    //       title={'最高立减20元'}
    //       subTitle={'现在下单再减10元'}
    //       rightImage={require('../../images/yyms.png')}
    //       titleColor={'red'}
    //     />
    // );
  }

  renderBottomView() {
    // var items = [];
    // for(var i = 0; i < 4; i++) {
    //   items.push(
    //     <HomeSpecialItem
    //       key={i}
    //       title={'最高立减20元'}
    //       subTitle={'现在下单再减10元'}
    //       rightImage={require('../../images/yyms.png')}
    //       titleColor={'red'}
    //     />
    //   );
    // }
    // return items;
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    marginTop: 10,
    width: width,
    height: 190,
    justifyContent: 'space-between',
  },
  topViewStyle: {
    height: 70-0.5,
    backgroundColor: 'white',
    justifyContent:'center',
  },
  bottomViewStyle: {
    height: 120-0.5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});