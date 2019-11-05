import React, { Component } from 'react';
import { Platform,StyleSheet,Button,View,SafeAreaView,Text,Alert,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons';
'use strict';

export default class App extends Component {
  constructor(props) {
    super(props);
    let data = [1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10];
    this.state = {
      colors:['green', 'blue', 'yellow', 'red'],
      buttonColor:'blue',
      view2LayoutProps: {
        left: 0,
        top: 0,
        width: 50,
        height: 50,
      }
    };
  }

  scrollToIndex = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }
  
  onLayout(event) {
    const {x, y, height, width} = event.nativeEvent.layout;
    const newHeight = this.state.view2LayoutProps.height + 1;
    const newLayout = {
        height: newHeight ,
        width: width,
        left: x,
        top: y,
      };

    this.setState({ view2LayoutProps: newLayout });
  }
  render() {
    return (
      <View>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}style={{flex: 7 }, styles.buttons_container}>
              <View style={[styles.button_date_container,styles.button_date_active]}>
                <Text>1/1</Text>
                <Text>Day 1</Text>
              </View>
              <View style={styles.button_date_container}>
                <Text>1/2</Text>
                <Text>Day 2</Text>
              </View>
              <View style={styles.button_date_container}>
                <Text>1/3</Text>
                <Text>Day 3</Text>
              </View>
            </ScrollView>
            <View style={styles.button_date_container_add}>
              <Text style={{fontSize:30, color:'#bbbdff'}}>+</Text>
            </View>
          </View>


        {/* Start Content */}
        <ScrollView
          onScroll={event => { 
            this.yOffset = event.nativeEvent.contentOffset.y;
            //console.log("Scroll Area y offset: " & this.yOffset);
          }}
        >
          <Text>Trip Schedule</Text>
          <View style={styles.container}>
          <View style={styles.header}>
            <Button
              onPress={this.scrollToIndex}
              title="Tap to scrollToIndex"
              color="darkblue"
            />
          </View>
          <FlatList
            style={{ flex: 1 }}
            ref={(ref) => { this.flatListRef = ref; }}
            keyExtractor={item => item}
            getItemLayout={(data, index) => (
              { length: 20, offset: 10 * index, index }
            )}
            initialScrollIndex={50}
            initialNumToRender={2}
            renderItem={({ item, index}) => (
                <View style={{}}>
                  <Text>{item}</Text>
                </View>
              )}
            {...this.props}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: 20,
    backgroundColor: 'darkturquoise', 
    alignItems: 'center', 
    justifyContent: 'center'
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