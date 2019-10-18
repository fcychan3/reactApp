//Felix Chan
//Following sample to add navbar with transparet
//PAB feature
//Please npm install 3 module 'react-navigation';
// 'react-navigation-stack';
// 'react-navigation-tabs';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FAB from 'react-native-fab'
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: '',
            });
          }}
        />
        <FAB buttonColor="red" iconTextColor="#000000" onClickAction={() => {console.log("FAB pressed")}} visible={true}  />
      </View>
      
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: navigation.getParam('otherParam', 'H'), //dynamic title
      headerTransparent: true, //Set transparent heading
      headerStyle: { borderBottomWidth: 0 }, //Set transparent heading
    };
  };
  //dynamic get parameter from clicking
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100), otherParam: null,
            })
          }
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />        
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
  Home:  HomeScreen,
  Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

class ExampleScreen extends React.Component {
  render() {
    return(
      <View>
        <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Text>+</Text>} />
      </View>
    );
}
}
const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);
//Entry Point
const Tabs = createBottomTabNavigator({ Home });

//Option 1 : bottom nav
//export default createAppContainer(Tabs); 

//Option 2 : top nav with Pab
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}