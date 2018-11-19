import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, WebView} from 'react-native';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class ShopCenterDetail extends Component {

  // componentDidMount() {
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        {this.renderWebView()}
      </View>
    );
  }

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <View style={styles.navLeftImgWrapper}>
          <TouchableOpacity
            onPress={()=>{this.props.navigator.pop()}}
            activeOpacity = {0.5}
          >
            <Image style={styles.navLeftImgStyle} source={require('../../images/navigationbar_arrow_up.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.navTitleStyle}>{this.props.name}</Text>
      </View>
    );
  }

  renderWebView() {
    return (
      <WebView
        source={{uri: 'https://www.hengyidai.com/'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e8e8e8',
  },
  navBarStyle: {
    backgroundColor: 'rgb(255, 96, 0)',
    height: (IsIphoneX ? 88 : 64),
    paddingTop: (IsIphoneX ? 44 : 20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  navLeftImgWrapper: {
    height: 44,
    width: 44,
    position: 'absolute',
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
  },
  navLeftImgStyle: {
    width: 14,
    height: 26,
  },
  navTitleStyle: {
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});