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

export default class HomeSpecialItem extends Component {

  static defaultProps = {
    title: '',
    subTitle: '',
    rightImage: null,
    titleColor: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
          <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
        </View>
        <Image
          style={styles.rightIcon}
          source={this.props.rightImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60-0.5,
    width: width/2-0.5,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },
  leftView: {

  },
  titleStyle: {
    fontSize: 15,
    marginLeft: 15
  },
  subTitleStyle: {
    fontSize: 12,
    color: 'gray',
    marginTop: 8,
    marginLeft: 15
  },
  rightIcon: {
    width: 59,
    height: 42,
    marginRight: 15
  }
});