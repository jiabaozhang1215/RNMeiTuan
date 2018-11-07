import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const items = [
			{icon: require('../../images/order1.png'), title: '待付款'},
			{icon: require('../../images/order2.png'), title: '待使用'},
			{icon: require('../../images/order3.png'), title: '待评价'},
			{icon: require('../../images/order4.png'), title: '退款/售后'}
		];

export default class MineOrderCell extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.renderItems()}
			</View>
		);
	}

	renderItems() {
		var allItems = [];
		for(var i = 0; i < items.length; i++) {
			allItems.push(
				<MineOrderItem key={i} icon={items[i].icon} title={items[i].title} />
			);
		}
		return allItems;
	}
}


class MineOrderItem extends Component {

	static defaultProps = {
		icon : null,	//图标
		title: '',		//标题
	}

	render() {
		return (
			<TouchableOpacity onPress={()=>{alert(this.props.title)}} activeOpacity={0.7}>
				<View style={styles.orderItemStyle}>
					<Image style={{width: 34, height: 24}} source={this.props.icon} />
					<Text style={{marginTop: 5, fontSize: 12}}>{this.props.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 60,
	},
	orderItemStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		width: (width/items.length),
		height: 60
	}
});