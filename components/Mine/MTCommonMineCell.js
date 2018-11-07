import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class CommonMineCell extends Component {

	constructor(props){
		super(props);
		this.renderLeftView = this.renderLeftView.bind(this);
		this.renderRightView = this.renderRightView.bind(this);
	}

	static defaultProps = {
		icon : null,		//图标
		title: '',			//标题
		subtitle: '',		//副标题
		isNew: false,	//是否显示“new”标签
	}

	render() {
		return (
			<TouchableOpacity>
				<View style={styles.cellStyle}>
					{this.renderLeftView()}
					{this.renderRightView()}
				</View>
			</TouchableOpacity>
		);
	}

	renderLeftView() {
		return (
			<View style={styles.leftViewStyle}>
				<Image style={{width:24, height:24, marginLeft:10, borderRadius:12}} source={this.props.icon} />
				<Text style={{marginLeft:10, fontSize:15}}>{this.props.title}</Text>
			</View>
		);
	}

	renderRightView() {
		if (this.props.isNew) {
			return (
				<View style={styles.rightViewStyle}>
					<Image
						style={{width:24, height:13, marginRight:5}}
	            		source={require('../../images/me_new.png')}
					/>
					<Image
						style={{width:15, height:22, marginRight:10}}
	            		source={require('../../images/home_arrow.png')}
					/>
				</View>
			);
		} else {
			return (
				<View style={styles.rightViewStyle}>
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
	cellStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 44,
		backgroundColor: '#ffffff',
		borderBottomColor: '#e8e8e8',
		borderBottomWidth: 0.5,
	},
	leftViewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	rightViewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});