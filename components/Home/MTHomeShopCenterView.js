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
import HomeSectionHeader from './MTHomeSectionHeader';

const { width, height } = Dimensions.get('window');
const Home_Data_D5 = require('../../LocalData/XMG_Home_D5.json').data;

export default class MTHomeShopCenter extends Component {

  constructor(props){
    super(props);
    this.clickShopCenter = this.clickShopCenter.bind(this);
  }

  static defaultProps = {
    shopCenterCallBack: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeSectionHeader
          leftIcon={require('../../images/gwzx.png')}
          leftTitle={'购物中心'}
          rightTitle={'全部商家'}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderScrollView()}
        </ScrollView>
      </View>
    );
  }

  renderScrollView() {
    var items = [];
    for(var i = 0; i < Home_Data_D5.length; i++) {
      var itemData = Home_Data_D5[i];
      items.push(
        <ShopCenterItem
          key={i}
          title={itemData.name}
          imgUrl={itemData.img}
          showtext={itemData.showtext.text}
          detailurl={itemData.detailurl}
          itemCallBack={(url, name) => this.clickShopCenter(url, name)}
        />
      );
    }
    return items;
  }

  clickShopCenter(url, name) {
    if (this.props.shopCenterCallBack == null) return;
    this.props.shopCenterCallBack(url, name);
  }
}

class ShopCenterItem extends Component {

  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
  }

  static defaultProps = {
    title: '',
    imgUrl: '',
    showtext: '',
    detailurl: '',
    itemCallBack: null,
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.clickItem(this.props.detailurl, this.props.title)}>
        <View style={{width:(width/3),height:(width/3), justifyContent:'space-between',alignItems:'center'}}>
        <Image
          style={{width:(width/3-30), height:(width/3-30)*0.8, marginTop:5, borderRadius:5}}
          source={{uri: this.props.imgUrl}}
        />
        <Text style={{fontSize:13, height:30}}>{this.props.title}</Text>
        <Text
          style={{position:'absolute',left:15,top:((width/3-30)*0.8-15),backgroundColor:'orange',height:15, fontSize:11}}
        >{this.props.showtext}</Text>
      </View>
      </TouchableOpacity>
    );
  }

  clickItem(url, name) {
    if (this.props.itemCallBack == null) return;
    this.props.itemCallBack(url, name);
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    width: width,
    backgroundColor: 'white',
  },
});