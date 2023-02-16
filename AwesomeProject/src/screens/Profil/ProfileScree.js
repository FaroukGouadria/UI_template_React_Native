import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { DATA } from '../../outils/Data';
import axios from 'axios';
import { UserCallApi } from '../../Redux/UserReducer';
import {useDispatch}from 'react-redux'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const URL = ''
const ProfileScreen = ({ navigation }) => {
    const dispatch=useDispatch();
    const callUser = async () =>{
            const data = await axios.get('https://jsonplaceholder.typicode.com/users/2');
            console.log({user:data.data});
            setUser(data.data)
    };
    const [user, setUser] = useState([]);
    useEffect(() => {
        // callUser()
      setUser(dispatch(UserCallApi()))  
    }, [])
    return (
        <LinearGradient colors={['#645CBB', '#A084DC', '#BFACE2']} style={styles.container}>
            <Text style={{ color: 'black', fontSize: 30, marginBottom: 20 }}>Profile Screen</Text>
            <Text style={styles.txt}>Name : </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Setting', { user:user })}>
                <Text style={styles.txt}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => dispatch(UserCallApi())}>
                <Text style={styles.txt}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Position')}>
                <Text style={styles.txt}>Location</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    btn: {
        backgroundColor: '#EBC7E6',
        borderRadius: 5,
        padding: 10,
        margin: 15,
        borderColor: 'black'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#537FE7'
    }
})