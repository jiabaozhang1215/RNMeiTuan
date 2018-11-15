import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class HomeSectionHeader extends Component {

  static defaultProps = {
    leftIcon: null,
    leftTitle: '',
    rightTitle: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Image
            source={this.props.leftIcon}
            style={{width:22,height:22,marginLeft:5}}
          />
          <Text style={{fontSize:14,marginLeft:5}}>{this.props.leftTitle}</Text>
        </View>
        <View style={styles.rightView}>
          <Text style={{fontSize:11,marginRight:5}}>{this.props.rightTitle}</Text>
          <Image
            source={require('../../images/home_arrow.png')}
            style={{width:15,height:21, marginRight:5}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});