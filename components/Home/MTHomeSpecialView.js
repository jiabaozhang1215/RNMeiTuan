import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import HomeSpecialItem from './MTHomeSpecialItem';

const { width, height } = Dimensions.get('window');

export default class HomeSpecialView extends Component {

  static defaultProps = {
    dataLeft: {},
    dataRight: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftViewStyle}>
          {this.renderLeftView()}
        </View>
        <View style={styles.rightViewStyle}>
          {this.renderRightView()}
        </View>
      </View>
    );
  }

  renderLeftView() {
    return (
      <View style={styles.leftViewContainer}>
        <Image style={{width:80,height:22}} source={this.props.dataLeft.img1} />
        <Image style={{width:63,height:45}} source={this.props.dataLeft.img2} />
        <Text style={{color:'gray',fontSize:13}}>{this.props.dataLeft.title}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:5,fontSize:10, color:'cyan'}}>{this.props.dataLeft.price}</Text>
          <Text style={{marginTop:5,marginLeft:3,fontSize:10, color:'orange',backgroundColor:'yellow'}}>{this.props.dataLeft.sale}</Text>
        </View>
      </View>
    );
  }

  renderRightView() {
    var itemsArray = [];
    for(var i = 0; i < this.props.dataRight.length; i++) {
      var item = this.props.dataRight[i];
      itemsArray.push(
        <HomeSpecialItem
          key={i}
          title={item.title}
          subTitle={item.subTitle}
          rightImage={item.rightImage}
          titleColor={item.titleColor}
        />
      );
    }
    return itemsArray;
  }


}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 120,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftViewStyle: {
    width: width/2-0.5,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',
  },
  leftViewContainer: {
    backgroundColor: 'white',
    justifyContent:'flex-start',
  },
  rightViewStyle: {
    width: width/2-0.5,
    justifyContent: 'space-between',
  }
});