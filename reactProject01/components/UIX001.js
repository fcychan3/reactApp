import React, { Component } from 'react';
import { Platform,StyleSheet,Button,View,SafeAreaView,Text,Alert,ScrollView,TouchableOpacity} from 'react-native';
import NavigationBar from 'react-native-navbar';

'use strict';

export default class App extends Component {
  state={
    colors:['green', 'blue', 'yellow', 'red'],
    buttonColor:'blue'
  };
  changeColor(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({buttonColor:currentColor});
  }
  render() {
    return (
      <View>
        <View style={styles.buttons_container}>
          <View id="123" style={styles.button_date_container}>
            <Text>1/1</Text>
          <Text style={{borderBottomColor:'red',borderBottomWidth:3}}>Day 1</Text>
          </View>
          <View style={styles.button_date_container}>
            <Text>1/2</Text>
            <Text>Day 2</Text>
          </View>
          <View style={styles.button_date_container}>
            <Text>1/3</Text>
            <Text>Day 3</Text>
          </View>
          <View style={styles.button_date_container, {backgroundColor:this.state.buttonColor}}>
            <Text style={{color: 'red'}}>+</Text>
          </View>
        </View>
        <ScrollView>
          <Text>Trip Schedule</Text>
          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor, padding: 15}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Change Color!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
function Separator() {
  styles.button_date_container.backgroundColor = '#000000'; 
}
const styles = StyleSheet.create({
  
  buttons_container :{
    flexDirection:'row',
    backgroundColor:'#f2f2f2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }
  ,
  button_date_container : {
    width:70, 
    height:70, 
    justifyContent:'center', 
    alignItems:'center',
    borderRightWidth: 1,
    borderRightColor: '#bbbdbb',
  },

  button_date_container_add : {
    width:70, 
    height:70, 
    justifyContent:'center', 
    alignItems:'center',
    borderRightWidth: 1,
    borderRightColor: '#bbbdbb',
  },
});