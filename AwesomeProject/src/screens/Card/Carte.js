import { View, Text ,FlatList, SafeAreaView, StyleSheet, ScrollView, Button, TouchableOpacity,Alert} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteApi, fetchPostsApi } from '../../Redux/PostsReducers';
import LinearGradient from 'react-native-linear-gradient';
import { AddPosts, delePosts, deletePost, deletePosts, getPosts, updatePostes, updatePosts } from '../../Redux/ProductReducer';

const Carte = () => {



const dispatch = useDispatch();
const postes = useSelector(state => state.PostsReducer.post);
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [data, setData] = useState([]);
const [isEdit, setIsEdit] = useState(false);
console.log({postes})
const [id, setId] = useState(null);
  const handleDelete = ({id}) => {
    dispatch(deletePost({id}));
    Alert.alert('post deleted successfully');
  };
  const handleUpdate = ({id}) => {
    // dispatch(apiUpdatePost({id: post[0].id, title: uptitle, body: upbody}));
    dispatch(updatePostes({id: id, title: title, body: body}));
    setBody('');
    setTitle('');
    setIsEdit(false);
    
    // dispatch(setEdit({edit:true,body:body}))
  };
  const dataPost = useSelector(state=>state.PostsReducer.post[0]);
  console.log({length:dataPost})
  const getData = ()=>{
    const data = 
    setData(data)
  }
useEffect(()=>{
  // dispatch(getPosts());
},[])  
const ShowCreatePost = ({id, title, body}) => {
  return (
    <View key={id}>
      <LinearGradient
        colors={['#b8b8f3', '#d7b8f3', '#f397d6']}
        style={[styles.container, {margin: 20}]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{body}</Text>
        {isEdit && (
          <>
            <View>
              <TextInput
                onChangeText={title => setTitle(title)}
                style={styles.input}
                placeholder="title"
                type="text"
                value={title}
              />
              <TextInput
                value={body}
                onChangeText={body => setBody(body)}
                style={styles.input}
                placeholder="body"
                type="text"
              />
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => handleUpdate(id)}>
                <Text style={styles.text1}>Update</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {setIsEdit(true) ,setId(id)}}>
              <Text style={styles.text1}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => handleDelete(id)}>
              <Text style={styles.text2}>Delete</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    </View>
  );
};
  return ( 
    <SafeAreaView style={{flex:1}}>
    
      <Text style={[styles.title,{margin:20,alignSelf:'center',color:'#f42272',fontSize:30,textAlign:'center'}]}>There are in this Data Base </Text>
    {data && 
  <ScrollView style={styles.scrollView}> 
      {dataPost.map((item,index)=>{
          return(
            <View key={item.id} > 
        <LinearGradient colors={['#b8b8f3', '#d7b8f3', '#f397d6']} style={{margin:20}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.body}</Text>
              <Text style={styles.title}>{item.id}</Text>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={styles.btn} onPress={()=>setIsEdit(false) } >
              <Text style={styles.text1}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}  onPress={()=>handleDelete({id:item.id})}>
              <Text style={styles.text2}>Delete</Text>
            </TouchableOpacity>
              </View>
        </LinearGradient> 
              </View>
          )
      })}

  </ScrollView>
    }
    </SafeAreaView>
  )
}

export default Carte

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignContent: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    margin: 12,
  },
  btn: {
    backgroundColor: 'white',
    margin: 20,
    padding: 12,
    height: 50,
    width: 70,
    alignSelf: 'center',
    borderRadius:5
  },
  btn2: {
    backgroundColor: '#F7F2B2',
    borderRadius: 5,
    padding: 15,
    margin: 20,
    borderColor: 'black',
    alignSelf: 'center',
  },
  btn1: {
    backgroundColor: '#f34646',
    borderRadius: 5,
    padding: 15,
    margin: 20,
    borderColor: 'black',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text1: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  text2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    top: 10,
  },
  body: {
    fontWeight: '300',
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});