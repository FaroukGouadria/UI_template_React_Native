import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const ProductScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30, marginBottom: 20 }}>Product Screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.txt}>Go to Search Screen</Text>
            </TouchableOpacity>
            <Button
                title='Go Back'
                color={"gray"}
                onPress={() => {
                    navigation.goBack();
                }} />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
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