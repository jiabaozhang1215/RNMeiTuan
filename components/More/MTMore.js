import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert} from 'react-native';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBarStyle}>
          <View style={styles.navImgWrapper}>
            <TouchableOpacity
              onPress={()=>{Alert.alert('touch more setting'); }}
              activeOpacity = {0.5}
            >
              <Image style={styles.navImgStyle} source={require('../../images/icon_mine_setting.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.navTitleStyle}>更多</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  navBarStyle: {
    backgroundColor: 'rgb(255, 96, 0)',
    height: (IsIphoneX ? 88 : 64),
    paddingTop: (IsIphoneX ? 44 : 20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  navImgWrapper: {
    height: 44,
    width: 44,
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
  },
  navImgStyle: {
    width: 25,
    height: 25,
  },
  navTitleStyle: {
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});