import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import React from 'react';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer initialRouteName="Home">
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#ddd'},
        headerTintColor: '#444',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'GameZone'}}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{title: 'Review Details'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
