import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, WebView} from 'react-native';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);
const pageUrlSuffix = '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';

export default class ShopCenterDetail extends Component {

  constructor(props){
    super(props);
    this.state= {
      pageUrl: this.props.pageUrl + pageUrlSuffix,
      pageTitle: this.props.pageTitle,
    }
  }

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
        <Text style={styles.navTitleStyle}>{this.state.pageTitle}</Text>
      </View>
    );
  }

  renderWebView() {
    return (
      <WebView
        source={{uri: this.state.pageUrl}}
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