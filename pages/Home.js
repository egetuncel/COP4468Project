import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Users from '../pages/Users';
import Posts from '../pages/Posts';

const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.container}>
    //       <TouchableOpacity onPress={() => navigation.navigate('Users')}>
    //         <View style={styles.view}>
    //           <Text style={styles.text}>USER</Text>
    //         </View>
    //       </TouchableOpacity>

    //       <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
    //         <View style={styles.view}>
    //           <Text style={styles.text}>POST</Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>

    //   </ScrollView>


    // </SafeAreaView>



<Tab.Navigator>
  <Tab.Screen name="Users" options={{ headerShown: false, headerTitle: 'Users' }} component={Users} />
  <Tab.Screen name="Posts" options={{ headerShown: false, headerTitle: 'Posts' }} component={Posts} />
</Tab.Navigator>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    alignItems: "center",
  },

  text: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  view: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
 
})