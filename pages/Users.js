import React, { useState, useEffect, Component } from 'react';
import {

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
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchUsersById } from './UsersById';

const Users = ({ navigation }) => {

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = `https://jsonplaceholder.typicode.com/users`;

  const fetchUsers = async () => {

    const resp = await fetch(api);
    const usersData = await resp.json();
    setUsersData(usersData);
    setLoading(false);
  };

  const ClosePage = () => {
    navigation.goBack();
  }

  const usersInfo = ({ item }) => {
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.navigate('UsersById', {userId: item.id})}>
          <View style={styles.view2}>
            <Text style={styles.text}>{item.name}</Text>
          </View>

        </TouchableOpacity>

      </View>
    )
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>


        <TouchableOpacity onPress={ClosePage}>
          <View style={styles.back}>
            <Text>Back</Text>
          </View>
        </TouchableOpacity>


        <View style={styles.container}>

          {loading ? <ActivityIndicator /> : (
            <FlatList
              data={usersData}
              keyExtractor={({ id }, index) => id}
              renderItem={usersInfo}

            />
          )}

        </View>

      </ScrollView>

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },

  text: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },

  view: {
    backgroundColor: "#e8e8e8",


    borderRadius: 10,
    marginVertical: 10,

    marginHorizontal: 40,
  },

  view2: {
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
  },

  back: {
    padding: 10,
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 40,
  }

})

export default Users