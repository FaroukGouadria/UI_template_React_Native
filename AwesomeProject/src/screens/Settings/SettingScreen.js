import { View, Text, StyleSheet,Button ,TouchableOpacity,TextInput} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';

const SettingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('user',route.params.user)
  const [user,setUser]=useState([]);
  useEffect(()=>{
      setUser(route.params.user);
      console.log({userSettings:user});
  },[user]);
  return (
    <LinearGradient colors={['#EDABE1', '#F7C0B2', '#E0CCAC']} style={styles.container}>
    <Text style={{ color: 'black', fontSize: 30, margin: 20,alignSelf:'center' }}>Profile Screen</Text>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
      <Text style={styles.txt}>Go to  Search </Text>
    </TouchableOpacity>
      <View  style={styles.form} >
      <TextInput
        style={styles.input} 
        value={user.name}
      />
        <TextInput
          style={styles.input}
          value={user.username}
        />
      <TextInput
        style={styles.input}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        value={user.website}
      />
      <TextInput
        style={styles.input}
        value={user.phone}
      />
      </View>
      <View style={{flexGrow:2,flexDirection:'row',justifyContent:'space-around',marginBottom:100,marginTop:30}}>
      <Button
  title='Update'
  color={"blue"}
  onPress={() => {
    console.log('update')
  }} />        
    <Button
  title='Go Back'
  color={"gray"}
  onPress={() => {
    navigation.goBack();
  }} /> 
      </View>
  </LinearGradient>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  btn: {
    backgroundColor: '#F7F2B2',
    borderRadius: 5,
    padding: 15,
    margin: 20,
    borderColor: 'black'
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    alignSelf:'center'
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    width:200,
    fontSize:17,
  fontWeight:'600'
  },
  form:{
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
  }
})