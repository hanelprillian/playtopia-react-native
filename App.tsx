/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './src/screens/Home';
import RootTabNavigation from './src/components/RootTabNavigation';

function RootScreen() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBarPosition='bottom' tabBar={props => <RootTabNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" options={{title: 'Pesanan'}} component={() => <Text>Pesanan Screen</Text>} />
      <Tab.Screen
        name="PlayCard"
        component={() => <Text>PlayCard Screen</Text>}
      />
      <Tab.Screen name="Outlet" component={() => <Text>Outlet Screen</Text>} />
      <Tab.Screen
        name="Account"
        component={() => <Text>Account Screen</Text>}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const AppStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Root" component={RootScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
