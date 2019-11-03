import React, { Component } from 'react';
import { StyleSheet,Button,View,SafeAreaView,Text,Alert,} from 'react-native';
'use strict';

export default class App extends Component {
  render() {
    return (
    <View>
        <View style={{flexDirection:'row'}}>
            <View style={{ justifyContent:'center', alignItems:'center'}}>
                 <Button title="Day 1" />
            </View>
                <View><Text>2020/1/1 Wed</Text></View>
                <View><Text>Start : PM06:00</Text></View>
        </View>

        <View style={{flexDirection:'row'}}>
            <View>
                <Text>PM06:00</Text>
                <Text>IMG000.jpg</Text>
                <Text>PM09:00</Text>
            </View>
            <View><Text>3 hrs</Text>
                <Text>Yankee Stadium</Text>
                <Text>Address</Text>
            </View>
            <View><Button title=". . ." /></View>        
        </View>

        <View style={{flexDirection:'row'}}>
            <View>
                <Text>Black rectangle</Text>
            </View>
            <View><Text>car icon take 22 mins to get there</Text></View>
            <View><Button title=">"/></View>           
        </View>

        <View style={{flexDirection:'row'}}>
            <View>
                 <Text>IMG000.jpg</Text>
            </View>
            <View><Button title="Add new attraction"/></View>           
        </View>

    </View>
    );
  }
}
