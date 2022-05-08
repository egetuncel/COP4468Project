import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const PostsById = ({ navigation, route }) => {

    const { postsId } = route.params;
    const [postsDetail, setPostsDetail] = useState([]);
    const [loading, setLoading] = useState(true);


    const ClosePage = () => {
        navigation.goBack();
    }

    const fetchPostsById = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postsId}`);
        const postsDetail = await resp.json();
        setPostsDetail(postsDetail);
        setLoading(false);
        console.log(postsDetail);
    };  

    useEffect(() => {
        fetchPostsById();
    }, []);


    return (
        <SafeAreaView>
            <TouchableOpacity onPress={ClosePage}>
                <View style={styles.back}>
                    <Text>Back</Text>
                </View>
            </TouchableOpacity>
            <View>

                {/* 1. tittle */}
                <View style={styles.container}>

                    <View>

                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{postsDetail.title}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{postsDetail.body}</Text>
                        
                    </View>

                </View>


            </View>
        </SafeAreaView>

    )
}

export default PostsById

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