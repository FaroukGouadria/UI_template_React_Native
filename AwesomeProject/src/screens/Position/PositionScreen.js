import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

const PositionScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 30, marginBottom: 20 }}>Position Screen</Text>
      <Button
        title='Go Back'
        color={"gray"}
        onPress={() => {
          navigation.goBack();
        }} />
    </View>
    )
}

export default PositionScreen

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