// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import HomeScreen from './screens/HomeScreen'
// import StatesList from './screens/StatesList'


// export default class App extends Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// }
// var AppNavigator = createSwitchNavigator({
//   HomeScreen: HomeScreen,
//   StatesList: StatesList,
// })

// const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import StatesList from './screens/StatesList'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Details from './screens/Details'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  StatesList: StatesList,
  Details:Details
})

const AppContainer = createAppContainer(AppNavigator)
