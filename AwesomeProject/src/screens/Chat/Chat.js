import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addContact,
  apiUpdatePost,
  createPost,
  CreateProduct,
  deletePost,
  fetchProduct,
  setEdit,
  updatePost,
  updatePosts,
} from '../../Redux/ProductReducer';

import LinearGradient from 'react-native-linear-gradient';

const Chat = () => {
  const dispatch = useDispatch();
  // const product = useSelector(state=>state.ProductReducer.product);
  const [showPost, setShowPost] = useState(false);
  const [values, setValues] = useState({title: '', body: ''});
  const [upDateValues,setUpDateValues]=useState({upTitle:'',upBody:''})
  const [uptitle,setUpTitle]=useState('')
  const [upbody,setUpBody]=useState('')
  const post = useSelector(state => state.PostsReducer.post,
  );
  const [isEdit, setIsEdit] = useState(false);;
  console.log({post});
  const {title, body} = values;
  const {upTitle, upBody} = upDateValues;
  const[id,setId]=useState(null)
  const handleSubmit = () => {
    dispatch(createPost({values}));
    setValues({title: '', body: ''});
    setShowPost(true);
  };
  const handleDelete = () => {
    dispatch(deletePost({id: post[0].id}));
    Alert.alert('post deleted successfully');
    setShowPost(false);
  };
  const handleUpdate = () => {
    // dispatch(apiUpdatePost({id: post[0].id, title: uptitle, body: upbody}));
    dispatch(updatePosts({id:post[0].id,title:uptitle,body:upbody}))
    // dispatch(setEdit({edit:true,body:body}))
  };
  useEffect(() => {
    // if (bodyy) {
    //   setTextBody(bodyy);
    // }
  }, []);

  const ShowCreatePost = () => {
    return (
      <View key={post[0].id}>
        <LinearGradient
          colors={['#b8b8f3', '#d7b8f3', '#f397d6']}
          style={[styles.container, {margin: 20}]}>
          <Text style={styles.title}>{post[0].title}</Text>
          <Text style={styles.title}>{post[0].body}</Text>
          {isEdit && (
            <>
            <View>
              <TextInput 
                onChangeText={(title) => setUpTitle(title)}
                style={styles.input}
                placeholder="title"
                type='text'
                value={uptitle}
              />  
              <TextInput
              value={upbody}
                onChangeText={(body) => setUpBody(body)} 
                style={styles.input}
                placeholder="body"
                type='text'
              />
              <TouchableOpacity
              style={styles.btn2}
              onPress={() => handleUpdate()}>
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
              onPress={() => {setIsEdit(true) ,setId(post[0].id)}}>
              <Text style={styles.text1}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => handleDelete()}>
              <Text style={styles.text2}>Delete</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,marginBottom:160}}>
      <TextInput
        value={title}
        onChangeText={text => setValues({...values, title: text})}
        style={styles.input}
        placeholder="title"
      />
      <TextInput
        value={body}
        onChangeText={text => setValues({...values, body: text})}
        style={styles.input}
        placeholder="body"
      />
      <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
        <Text style={styles.text}> ADD </Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {showPost && <ShowCreatePost />}
      </ScrollView>
    </SafeAreaView>
  );
};

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
    backgroundColor: 'gray',
    margin: 20,
    padding: 12,
    height: 50,
    width: 70,
    alignSelf: 'center',
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
    fontSize: 15,
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
export default Chat;
