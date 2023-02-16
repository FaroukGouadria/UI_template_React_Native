import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
const ProductScreen = ({navigation}) => {
    const route=useRoute();
  const TITRE = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const dataa = route.params.title;
    return (
        <SafeAreaView style={{ flex: 1,  alignItems: 'center' }}>
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
                 <View style={{marginTop:20}}>
                    <FlatList
                        data={dataa}
                        renderItem={({item})=><TITRE title={item.title} />}
                        keyExtractor={item=>item.id}
                    />
               </View>
        </SafeAreaView>
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
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})