import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Button, StyleSheet , ScrollView, TouchableOpacity, RefreshControl} from 'react-native';

const { width } = Dimensions.get('window');

const style = {
  justifyContent: 'center',
  alignItems: 'center',
  width: width,
  height: 50,
  flex: 1,
  borderWidth: 1,
};

function getData(val) {
  let data = [];
  for(let i=0;i<val;i++){
    data.push(i);
  }
  return data;
}

//Entry Point
class ScrollToExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active_index: 0,
    }
    this.refreshScreen = this.refreshScreen.bind(this)
  }
  refreshScreen = (val) => {
    this.setState({ active_index: val });
  }
  setActiveIndex = (val) => {
    this.state.active_index = val;
    console.log(this.state.active_index);
  }
  scrollToIndex = (val) => {
    this.flatListRef.scrollToIndex({animated: false, index: val});
  }
  
  activeDateStyle = (val) =>{
    console.log("Call Upadate Style : " + val );
    if (val == this.state.active_index){ 
      return{
        borderBottomWidth:3,
        borderBottomColor:'red',
      }
    }else{
      return{
        borderBottomWidth:3,
        borderBottomColor:'#f2f2f2',
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
          {/* Static Top Row Bar */}
          <View style={{flexDirection: 'row'}}>
            <ScrollView onScroll={ (event) => console.log(event.nativeEvent.contentOffset.y)} horizontal={true}style={{flex: 7 }, styles.buttons_container} >
              <TouchableOpacity onPress={() => { this.setActiveIndex(0); this.scrollToIndex(0);this.refreshScreen(0);}} style={[styles.button_date_container,this.activeDateStyle(0)]}>
                <Text>1/1</Text>
                <Text>Day 1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.setActiveIndex(1); this.scrollToIndex(1);this.refreshScreen(1);}} style={[styles.button_date_container,this.activeDateStyle(1)]}>
                <Text>1/2</Text>
                <Text>Day 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.setActiveIndex(2); this.scrollToIndex(2);this.refreshScreen(2);}} style={[styles.button_date_container,this.activeDateStyle(2)]}>
                <Text>1/3</Text>
                <Text>Day 3</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.button_date_container_add}>
              <Text style={{fontSize:30, color:'#bbbdff'}}>+</Text>
            </View>
          </View>
        {/* Scroll Menu */}
        <FlatList
          style={{ flex: 1 }}
          ref={(ref) => { this.flatListRef = ref; }}
          keyExtractor={item => item}
          //Jumption {offset need} to change ** depends on the renderItem height
          getItemLayout={(data, index) => (
            { length: 20, offset: 800 * index, index }
          )}
          renderItem={({ item, index}) => (
              <View style={{height:800}}>
                <Text style={{fontSize:40}}>Day {item + 1}</Text>
              </View>
            )}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons_container :{
    backgroundColor:'#f2f2f2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  button_date_container : {
    width:70, 
    height:70,
    justifyContent:'center', 
    alignItems:'center',
    borderRightWidth: 1,
    borderRightColor: '#bbbdbb',
  },
  button_date_active : {
    borderBottomWidth:3,
    borderBottomColor:'red',
  },
  button_date_container_add : {
    width:70, 
    height:70,
    justifyContent:'center',
    alignItems: 'center',
    // border css
    borderLeftWidth: 1,
    borderLeftColor: '#bbbdbb',
    backgroundColor:'#f2f2f2',
    // shadow css
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default class app extends Component {
  render() {
    return  <ScrollToExample
               data={getData(3)}
            />
  }
}
