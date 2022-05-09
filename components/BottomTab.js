import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Users" component={Users} />
          <Tab.Screen name="Posts" component={Posts} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  
}

export default BottomTab