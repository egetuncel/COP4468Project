import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Posts = ({ navigation }) => {

    const [postsData, setPostsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const ClosePage = () => {
        navigation.goBack();
    }

    const fetchPosts = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const postsData = await resp.json();
        setPostsData(postsData);
        setLoading(false);
        //console.log(postsData);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const postsInfo = ({ item }) => {
        return (
          <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('PostsById', {postsId: item.id})}>
              <View style={styles.view2}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
    
            </TouchableOpacity>
    
          </View>
        )
      }

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
                            data={postsData}
                            keyExtractor={({ id }, index) => id}
                            renderItem={postsInfo}

                        />
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Posts

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
