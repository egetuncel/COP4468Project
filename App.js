import React, { useState, useEffect, Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  const fetchUsersById = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await resp.json();
    
  };

  const fetchPosts = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await resp.json();
    
  };

  const fetchPostsById = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await resp.json();
    
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (

    <SafeAreaView>

      <ScrollView>


        <View style={styles.sectionContainer}> 
        {loading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.name}</Text>
            )}

          />
        )}

        </View>




      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
