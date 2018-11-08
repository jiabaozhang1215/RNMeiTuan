import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class MineHeaderView extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    icon: null, //头像
    name: '',   //姓名
    params: {coupons: 0, comments: 0, collects: 0}
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMiddleView()}
        {this.renderBottomView()}
      </View>
    );
  }

  //中间部分（icon，name等信息）
  renderMiddleView() {
    return (
      <View style={styles.middleViewStyle}>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'flex-start'}}>
          <Image style={{marginLeft:10,width:60,height:60,borderRadius:30}} source={this.props.icon} />
          <Text style={{color:'white', fontSize:15, marginLeft:10}}>{this.props.name}</Text>
          <Image style={{marginLeft:2,width:16,height:16,borderRadius:8}} source={require('../../images/avatar_vip.png')} />
        </View>
        <Image style={{marginRight:10,width:20,height:20}} source={require('../../images/icon_arrow_right.png')} />
      </View>
    );
  }

  //渲染底部半透明层view
  renderBottomView() {
    return (
      <View style={styles.bottomViewStyle}>
        <BottomItem number={this.props.params.coupons} title={'抵用券'} />
        <View style={{width:1, height:35, backgroundColor:'white'}}></View>
        <BottomItem number={this.props.params.comments} title={'评价'} />
        <View style={{width:1, height:35, backgroundColor:'white'}}></View>
        <BottomItem number={this.props.params.collects} title={'收藏'} />
      </View>
    );
  }

}

class BottomItem extends Component {
  static defaultProps = {
    number: '',
    title: '',
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>{alert(this.props.title+' : '+this.props.number)}} activeOpacity={0.7}>
        <View style={styles.BottomItemStyle}>
          <Text style={{color:'white', fontSize:12}}>{this.props.number}</Text>
          <Text style={{color:'white', fontSize:12, marginTop:5}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(255, 96, 0)',
    height: (IsIphoneX ? 150+24 : 150),
  },
  middleViewStyle: {
    height: 80,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomViewStyle: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  BottomItemStyle: {
    backgroundColor:'rgba(255,255,255,0.5)',
    width:(width/3),
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
  }
});