import React, {
  Component
} from 'react';
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

const {
  width,
  height
} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);
// NavBar
const NavItemHeight = 30;
const NavLeftWidth = 35;
const NavRightWidth = 65;
const vMargin = 10;
const NavInputWidth = (width - NavLeftWidth - NavRightWidth - vMargin * 3);

export default class HomeNavBar extends Component {

  render() {
    return (
      <View style={styles.navBarStyle}>
        <TouchableOpacity
          onPress={()=>{ Alert.alert('点击了left') }}
          activeOpacity = {0.5}
        >
          <Text style={styles.leftItemStyle}>广州</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.middleInputStyle}
          placeholder={'请输入商家、品类、商圈'}
        />
        <View style={styles.rightItemStyle}>
          <TouchableOpacity
            onPress={()=>{ Alert.alert('点击了msg alert') }}
            activeOpacity = {0.5}
          >
            <Image style={styles.rightItemImgStyle} source={require('../../images/icon_homepage_message.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{ Alert.alert('点击了scan') }}
            activeOpacity = {0.5}
          >
            <Image style={styles.rightItemImgStyle} source={require('../../images/icon_homepage_scan.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <TouchableOpacity
          onPress={()=>{ Alert.alert('点击了left') }}
          activeOpacity = {0.5}
        >
          <Text style={styles.leftItemStyle}>广州</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.middleInputStyle}
          placeholder={'请输入商家、品类、商圈'}
        />
        <View style={styles.rightItemStyle}>
          <TouchableOpacity
            onPress={()=>{ Alert.alert('点击了msg alert') }}
            activeOpacity = {0.5}
          >
            <Image style={styles.rightItemImgStyle} source={require('../../images/icon_homepage_message.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{ Alert.alert('点击了scan') }}
            activeOpacity = {0.5}
          >
            <Image style={styles.rightItemImgStyle} source={require('../../images/icon_homepage_scan.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: 'rgb(255, 96, 0)',
    height: (IsIphoneX ? 88 : 64),
    paddingTop: (IsIphoneX ? 44 : 20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  leftItemStyle: {
    width: NavLeftWidth,
    lineHeight: NavItemHeight,
    textAlign: 'center',
    height: NavItemHeight,
    color: 'white',
    fontSize: 15,
  },
  middleInputStyle: {
    backgroundColor: 'white',
    width: NavInputWidth,
    height: NavItemHeight,
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  rightItemStyle: {
    flexDirection: 'row',
    width: NavRightWidth,
    height: NavItemHeight,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rightItemImgStyle: {
    width: 25,
    height: 25,
  },
});