import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert, ScrollView} from 'react-native';
import CommonCell from './MTCommonMoreCell';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/*navBar*/}
        <View style={styles.navBarStyle}>
          <View style={styles.navImgWrapper}>
            <TouchableOpacity
              onPress={()=>{Alert.alert('touch more setting'); }}
              activeOpacity = {0.5}
            >
              <Image style={styles.navImgStyle} source={require('../../images/icon_more_setting.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.navTitleStyle}>更多</Text>
        </View>

        {/*ScrollView*/}
        <ScrollView>
          <View style={{marginTop:10}}>
            <CommonCell title="扫一扫" />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell title="省流量模式" isSwitch={true} />
            <CommonCell title="消息提醒" />
            <CommonCell title="邀请好友" />
            <CommonCell title="清空缓存" subtitle="2.98MB" />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell title="意见反馈" />
            <CommonCell title="问卷调查" />
            <CommonCell title="支付帮助" />
            <CommonCell title="网络诊断" />
            <CommonCell title="关于码团" />
            <CommonCell title="我要应聘" />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell title="精品应用" />
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor:'#e8e8e8'
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