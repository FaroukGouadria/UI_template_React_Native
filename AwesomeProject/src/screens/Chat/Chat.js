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
  AddPosts,
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
import {FlatList} from 'react-native-gesture-handler';

const Chat = () => {
  const dispatch = useDispatch();
  // const product = useSelector(state=>state.ProductReducer.product);
  const [showPost, setShowPost] = useState(false);
  const [values, setValues] = useState({title: '', body: ''});
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [upDateValues, setUpDateValues] = useState({upTitle: '', upBody: ''});
  const [uptitle, setUpTitle] = useState('');
  const [upbody, setUpBody] = useState('');
  const post = useSelector(state => state.PostsReducer.post);
  const [isEdit, setIsEdit] = useState(false);
  console.log({post});
  // const {title, body} = values;
  const [id, setId] = useState(null);
  const handleSubmit = () => {
    // dispatch(createPost({values}));
    // dispatch(AddPosts({title, body}));
    dispatch(createPost({title,body}))
    setTitle('');
    setBody('');
    setShowPost(true);
    Alert.alert('post added successfully');
  };
  const handleDelete = () => {
    dispatch(deletePost({id: post[0].id}));
    Alert.alert('post deleted successfully');
    setShowPost(false);
  };
  const handleUpdate = () => {
    // dispatch(apiUpdatePost({id: post[0].id, title: uptitle, body: upbody}));
    dispatch(updatePosts({id: post[0].id, title: uptitle, body: upbody}));
    setUpBody('');
    setUpTitle('');
    setIsEdit(false);
    
    // dispatch(setEdit({edit:true,body:body}))
  };
  useEffect(() => {
    // if (bodyy) {
    //   setTextBody(bodyy);
    // }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, marginBottom: 160}}>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.input}
          placeholder="title"
        />
        <TextInput
          value={body}
          onChangeText={text => setBody(text)}
          style={styles.input}
          placeholder="body"
        />
        <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
          <Text style={styles.text}> ADD </Text>
        </TouchableOpacity>
      </View>
      {/* <SafeAreaView style={styles.scrollView}>
        {showPost && (
          <FlatList
            data={post}
            renderItem={item => (
              <ShowCreatePost
                id={item.id}
                title={item.title}
                body={item.body}
                keyExtractor={item => item.id}
              />
            )}
          />
        )}
      </SafeAreaView> */}
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
