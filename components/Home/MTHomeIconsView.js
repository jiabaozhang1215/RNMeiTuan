import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const scrollHeight = 160;
const indicatorHeight = 30;

export default class HomeIconsView extends Component {

  constructor(props){
    super(props);
    this.state = {
      numberOfPages: 0, //scrollView需要分为几页
      resultArray: [],  //最终使用的数组
      currentPage: 0,   //当前所在页码
    }
  }

  static defaultProps = {
    icons: [],//从父组件接收的数组
    numberOfItemsPerPage: 8, //scrollView每页显示多少个item
  }

  componentDidMount() {
    this.calculatePagesOfScrollView();
    this.sliceIconsArray();
  }

  calculatePagesOfScrollView() {
    var numberOfPages = Math.ceil(this.props.icons.length / 8);
    this.setState({
      numberOfPages: numberOfPages
    });
    return numberOfPages;
  }

  getCurrentPage(param) {
    var offsetX = param.nativeEvent.contentOffset.x;
    var currentPage = Math.floor(offsetX / width);
    this.setState({
      currentPage: currentPage,
    })
  }

  sliceIconsArray() {
    var result = [];
    var size = this.props.numberOfItemsPerPage;
    var originalArray = this.props.icons;
    if (originalArray.length == 0) { return originalArray; }
    for(var i = 0 ; i < Math.ceil(originalArray.length / size); i++) {
      var startIndex = i * size;
      var endIndex = startIndex + size;
      result.push(originalArray.slice(startIndex, endIndex));
    }
    this.setState({
      resultArray: result
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/*icons*/}
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(param)=>this.getCurrentPage(param)}
        >
          {this.renderScrollView()}
        </ScrollView>
        {/*指示器*/}
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicatorView()}
        </View>
      </View>
    );
  }

  renderScrollView() {
    var scrollPages = [];
    for(var i = 0; i < this.state.numberOfPages; i++) {
      scrollPages.push(
        <View key={i} style={styles.scrollViewStyle}>
          {this.renderItems(i)}
        </View>
      );
    }
    return scrollPages;
  }

  renderItems(index) {
    var items = [];
    for(var i = 0; i < this.state.resultArray[index].length; i++) {
      items.push(
        <IconItem key={i} icon={this.state.resultArray[index][i].icon} title={this.state.resultArray[index][i].title} />
      );
    }
    return items;
  }

  renderIndicatorView() {
    var indicators = [];
    var selectedColor;
    for(var i = 0; i < this.state.numberOfPages; i++) {
      selectedColor = (i === this.state.currentPage) ? {backgroundColor: 'cyan'} : {backgroundColor: 'gray'};
      indicators.push(
        <Text
          style={[{width:8, height:8, overflow:'hidden', borderRadius:4, backgroundColor:'gray', marginRight:10}, selectedColor]}
          key={i}
        >
        </Text>
      );
    }
    return indicators;
  }

}



class IconItem extends Component {
  
  static defaultProps = {
    icon: null,
    title: '',
  }

  render() {
    return (
    <TouchableOpacity onPress={()=>alert(this.props.title)} activeOpacity={0.7}>
        <View style={styles.iconItemViewStyle}>
          <Image style={{width:40, height:40}} source={this.props.icon} />
          <Text style={{marginTop:8, fontSize:13}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: (scrollHeight + indicatorHeight),
  },
  scrollViewStyle: {
    width:width,
    height:scrollHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor:'white'
  },
  iconItemViewStyle: {
    width:(width/4),
    height:(scrollHeight/2),
    justifyContent: 'center',
    alignItems:'center'
  },
  indicatorViewStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: indicatorHeight,
  }
});