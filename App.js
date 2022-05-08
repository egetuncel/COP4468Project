import React, { useState, useEffect, Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Route from './routes/Route';

const Item = ({ item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.id}</Text>
  </TouchableOpacity>
);

const App = () => {

  // const [userData, setUserData] = useState([]);
  // const [userDataById, setUserDataById] = useState([]);
  // const [postsData, setPostsData] = useState([]);
  // const [loading, setLoading] = useState(true);
 
  // const fetchUsers = async () => {
  //   const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const userData = await resp.json();
  //   setUserData(userData);
  //   setLoading(false);
  // };

  // const fetchUsersById = async (id) => {
  //   const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   const userDataById = await resp.json();
  //   setUserDataById(userDataById);
  //   setLoading(false);
  //   console.log(userDataById);
  // };

  // const fetchPosts = async () => {
  //   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const postsData = await resp.json();
  //   setPostsData(postsData);
  //   setLoading(false);
  //   //console.log(postsData);
    
  // };

  // const fetchPostsById = async () => {
  //   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //   //const data = await resp.json();
    
  // };

  // useEffect(() => {
  //   fetchUsers();
  //   fetchUsersById();
  // }, []);


  return (

    // <SafeAreaView>

    //   <ScrollView>



    //     {/* <FetchUser>
    //       <TouchableOpacity>

    //       </TouchableOpacity>
    //     </FetchUser> */}
        // <View style={styles.sectionContainer}> 
        
        // {loading ? <ActivityIndicator /> : (
        //   <FlatList
        //     data={userData}
        //     keyExtractor={({ id }, index) => id}
        //     renderItem={({ item }) => (
        //     <TouchableOpacity onPress={() => (fetchUsersById(item.id))}>
        //         <View>
        //         <Text>{item.name}</Text>
        //         </View>
           
        //       </TouchableOpacity>
        //     )}
           
        //   />
        
        // )}
 
        // </View>

    //     <View style={styles.sectionContainer}> 
    //     {loading ? <ActivityIndicator /> : (
    //       <FlatList
    //         data={postsData}
    //         keyExtractor={({ id }, index) => id}
    //         renderItem={({ item }) => (
            
    //           <Text>{item.id}</Text>
           
    //         )}

    //       />
    //     )}

    //     </View>


    //   </ScrollView>
    // </SafeAreaView>
    <Route/>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
