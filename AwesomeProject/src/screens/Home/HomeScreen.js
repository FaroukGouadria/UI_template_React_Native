import { View, Text, Button, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { ApiCall } from '../../Redux/ApiReducer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({ navigation }) => {
 const dispatch = useDispatch();
    const data = useSelector(state=>state.ApiReducer.data);
    useEffect(() => {
        dispatch(ApiCall())
    }, [])
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <Text style={{ color: 'black', fontSize: 30, marginBottom: 20 }}>HomeScreen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Product',{title:data})}>
                <Text style={styles.txt}>Go to Product Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.txt}>Go to Serach Screen</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    btn: {
        backgroundColor: '#66FCFC',
        borderRadius: 5,
        padding: 15,
        margin: 20,
        borderColor: 'black'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
})