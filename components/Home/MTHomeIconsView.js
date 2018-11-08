import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const scrollHeight = 160;

export default class HomeIconsView extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndicator: 0,
      numberOfPages: 0,//scrollView需要分为几页
    }
    this.renderItems = this.renderItems.bind(this);
  }

  static defaultProps = {
    icons: [],//需要显示的图标数组
    numberOfItemsPerPage: 8, //每页scrollView显示多少个item
  }

  componentDidMount() {
    this.calculatePagesOfScrollView();
  }

  calculatePagesOfScrollView() {
    var numberOfPages = Math.ceil(this.props.icons.length / 8);
    this.setState({
      numberOfPages: numberOfPages
    });
    return numberOfPages;
  }

  render() {
    return (
      <View style={styles.container}>
        {/*icons*/}
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderScrollView()}
        </ScrollView>
        {/*指示器*/}
        {this.renderIndicatorView()}
      </View>
    );
  }

  renderScrollView() {
    var scrollPages = [];
    var colors = ['cyan', 'steelblue', 'purple', 'darkcyan', 'green'];
    for(var i = 0; i < this.state.numberOfPages; i++) {
      scrollPages.push(
        <View key={i} style={[styles.scrollViewStyle, {backgroundColor:colors[i]}]}>
          {this.renderItems(i)}
        </View>
      );
    }
    return scrollPages;
  }

  renderItems(index) {
    var items = [];

    if (index == 0) {
      for(var i = 0; i < 8; i++) {
        items.push(
          <IconItem key={i} icon={this.props.icons[i].icon} title={this.props.icons[i].title} />
        );
      }
    } else if (index == 1) {
      for(var i = 8; i < this.props.icons.length; i++) {
        items.push(
          <IconItem key={i} icon={this.props.icons[i].icon} title={this.props.icons[i].title} />
        );
      }
    }
    return items;
  }


  renderIndicatorView(index) {
    
  }

}

class IconItem extends Component {
  
  static defaultProps = {
    icon: null,
    title: '',
  }

  render() {
    return (
      <View style={styles.iconItemViewStyle}>
        <Image style={{width:40, height:40}} source={this.props.icon} />
        <Text style={{marginTop:5, fontSize:13}}>{this.props.title}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: scrollHeight,
  },
  scrollViewStyle: {
    width:width,
    height:scrollHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  iconItemViewStyle: {
    width:(width/4),
    height:(scrollHeight/2),
    justifyContent: 'center',
    alignItems:'center'
  }
});