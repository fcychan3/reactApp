import React, { Component } from 'react';
import { StyleSheet,Button,View,SafeAreaView,Text,Alert,} from 'react-native';
'use strict';

export default class App extends Component {
  render() {
    return (
      <View style={{flexDirection:'row'}}>

        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
			<Text>1/1</Text>
			<Text style={{borderBottomColor:'red',borderBottomWidth:3}}>Day 1</Text>
        </View>

        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
        	<Text>1/2</Text>
			<Text>Day 2</Text>
        </View>
        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
        	<Text>1/3</Text>
			<Text>Day 3</Text>
        </View>
        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
        	<Text></Text>
			<Text></Text>
        </View>
        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
        	<Text></Text>
			<Text></Text>
        </View>
        <View style={{width:70, height:70, justifyContent:'center', alignItems:'center'}}>
        	<Text style={{color: 'red'}}>+</Text>
        </View>
      </View>
    );
  }
}