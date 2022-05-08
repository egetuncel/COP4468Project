import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';





const UsersById = ({ navigation, route }) => {

    const { userId } = route.params;
    const [usersDetail, setUsersDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const ClosePage = () => {
        navigation.goBack();
    }

    const fetchUsersDetail = async () => {


        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const usersDetail = await resp.json();
        setUsersDetail(usersDetail);
        setLoading(false);
        console.log(usersDetail);
    };

    useEffect(() => {
        fetchUsersDetail();
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
                        }}>{usersDetail.name}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.username}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.email}</Text>
                        {/* <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.street}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.suite}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.city}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.zipcode}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.geo.lat}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.address.geo.lng}</Text> */}
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.phone}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.website}</Text>
                        {/* <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.company.name}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.company.catchPhrase}</Text>
                        <Text style={{
                            textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 24,
                            marginLeft: 30, marginRight: 30
                        }}>{usersDetail.company.bs}</Text> */}
                    </View>

                </View>


            </View>
        </SafeAreaView>

    )
}

export default UsersById

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