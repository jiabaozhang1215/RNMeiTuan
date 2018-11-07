import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Switch} from 'react-native';


export default class CommonCell extends Component {

  static defaultProps = {
    title: '',        //标题
    isSwitch: false,  //是否需要显示开关
    subtitle: ''      //子标题
  }

  constructor(props) {
    super(props);
    this.state = {
      isOn: false,  //开关状态
    }
    this.renderRightView = this.renderRightView.bind(this);
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>{Alert.alert(this.props.title)}} activeOpacity={0.8}>
        <View style={styles.container}>
          <Text style={{fontSize:15, marginLeft:10}}>{this.props.title}</Text>
          {this.renderRightView()}
        </View>
      </TouchableOpacity>
    );
  }

  renderRightView() {
    if (this.props.isSwitch) {
      return (
        <Switch
          style={{marginRight: 10}}
          value={this.state.isOn == true}
          onValueChange={()=>{
            this.setState({
              isOn: !this.state.isOn
            });
          }}
        />
      );
    } else {
      return (
        <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
          <Text style={{fontSize:12, marginRight:5}}>{this.props.subtitle}</Text>
          <Image
            style={{width:15, height:22, marginRight:10}}
            source={require('../../images/home_arrow.png')}
          />
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:'#e8e8e8',
    borderBottomWidth: 0.5,
  }
});