import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import CommonCell from './MTCommonMineCell';

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/*cells*/}
        <ScrollView>
          <View style={{marginTop:10}}>
            <CommonCell icon={require('../../images/pay.png')} title="我的钱包" subtitle={"账户余额:￥24.5"} />
            <CommonCell icon={require('../../images/card.png')} title="抵用券" subtitle={"3张"} />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell icon={require('../../images/new_friend.png')} title="积分商城" />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell icon={require('../../images/like.png')} title="今日推荐" isNew={true} />
          </View>
          <View style={{marginTop:10}}>
            <CommonCell icon={require('../../images/collect.png')} title="我要合作" subtitle="轻松开店，招财进宝" />
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#e8e8e8',
	}
});