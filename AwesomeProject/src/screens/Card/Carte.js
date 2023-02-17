import { View, Text ,FlatList, SafeAreaView, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteApi, fetchPostsApi } from '../../Redux/PostsReducers';
import LinearGradient from 'react-native-linear-gradient';



const Carte = () => {
const dispatch = useDispatch();
const [post,setPost]=useState([]);
const posts = useSelector(state=>state.PostReducer.post);
const getData = ()=>{   
  dispatch(fetchPostsApi())
  setPost(posts)
}
useEffect(()=>{
  getData(); 
  console.log({postCart:post});
},[])  
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={[styles.title,{margin:20,alignSelf:'center',color:'#f42272',fontSize:30,textAlign:'center'}]}>There are {posts.length} in this Data Base </Text>
  <ScrollView style={styles.scrollView}> 
      {posts.map((item,index)=>{
          return(
            <View key={item.id} > 
        <LinearGradient colors={['#b8b8f3', '#d7b8f3', '#f397d6']} style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={styles.btn} >
              <Text style={styles.text1}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}  onPress={()=>dispatch(DeleteApi({id:posts[0].id}))}>
              <Text style={styles.text2}>Delete</Text>
            </TouchableOpacity>
              </View>
        </LinearGradient> 
              </View>
          )
      })}

  </ScrollView>
    </SafeAreaView>
  )
}

export default Carte

const styles=StyleSheet.create({
  container:{
      margin:10,

  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontWeight:'bold',
    fontSize: 15,
    padding:10 ,
    top:10
   },
  body:{
    fontWeight:'300',
    fontSize:10
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  btn: {
    backgroundColor: '#F7F2B2',
    borderRadius: 5,
    padding: 15,
    margin: 20,
    borderColor: 'black',
    alignSelf:'center'
  },
  btn1: {
    backgroundColor: '#f34646',
    borderRadius: 5,
    padding: 15,
    margin: 20,
    borderColor: 'black',
    alignSelf:'center'
  },
  text1:{
    color:'#000',fontSize:15,fontWeight:'bold'
  },
  text2:{
    color:'#fff',fontSize:15,fontWeight:'bold'
  }


})