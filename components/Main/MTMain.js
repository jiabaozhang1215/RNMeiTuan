import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/MTHome';
import Shop from '../Shop/MTShop';
import Mine from '../Mine/MTMine';
import More from '../More/MTMore';

const {width, height} = Dimensions.get('window');
const IsIphoneX = (Platform.OS == 'ios' && width == 375 && height == 812);

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home'
    }
    this.renderTabBarItem = this.renderTabBarItem.bind(this);
  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={{paddingBottom:(IsIphoneX?34:0), height:(IsIphoneX?83:49)}}
      >
        {this.renderTabBarItem('首页', require('../../images/icon_tabbar_homepage.png'), require('../../images/icon_tabbar_homepage_selected.png'), 'home', '首页', Home)}
        {this.renderTabBarItem('商家', require('../../images/icon_tabbar_merchant_normal.png'), require('../../images/icon_tabbar_merchant_selected.png'), 'shop', '商家', Shop)}
        {this.renderTabBarItem('我的', require('../../images/icon_tabbar_mine.png'), require('../../images/icon_tabbar_mine_selected.png'), 'mine', '我的', Mine)}
        {this.renderTabBarItem('更多', require('../../images/icon_tabbar_misc.png'), require('../../images/icon_tabbar_misc_selected.png'), 'more', '更多', More)}
      </TabNavigator>
    );
  }


  /**
    * 封装TabNavigator.Item
    * title: TabBarItem标题
    * icon: TabBarItem图标
    * selectedIcon: TabBarItem选中时的图标
    * selectedTab: 选中的tabItem
    * componentName: Navigator栈底路由名称
    * component: Navigator栈底路由
    */
  renderTabBarItem(title, icon, selectedIcon, selectedTab, componentName, component) {
    return (
      <TabNavigator.Item
          title={title}
          titleStyle={styles.tabTitleStyle}
          selectedTitleStyle={styles.selectedTabTitleStyle}
          renderIcon={()=><Image style={styles.iconStyle} source={icon} />}
          renderSelectedIcon={()=><Image style={styles.iconStyle} source={selectedIcon} />}
          selected={ this.state.selectedTab === selectedTab }
          onPress={ () => { this.setState({ selectedTab : selectedTab }) }}
        >
          <Navigator
            initialRoute={{name: componentName, component: component}}
            configureScene={() => {
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}
          />
        </TabNavigator.Item>
    );
  }


}

const styles = StyleSheet.create({
  tabTitleStyle: {
    color: 'gray'
  },
  selectedTabTitleStyle:{
    color: 'rgb(231, 58, 5)'
  },
  iconStyle:{
    width: 22,
    height: 22,
  },
});