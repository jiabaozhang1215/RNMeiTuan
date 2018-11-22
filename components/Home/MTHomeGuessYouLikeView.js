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
  TouchableOpacity
} from 'react-native';
import HomeSpecialItem from './MTHomeSpecialItem';
import HomeSectionHeader from './MTHomeSectionHeader';

export default class HomeGuessYouLikeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeSectionHeader
          leftIcon={require('../../images/cnxh.png')}
          leftTitle={'猜你喜欢'}
          rightTitle={'全部商家'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    marginTop: 10
  },
});