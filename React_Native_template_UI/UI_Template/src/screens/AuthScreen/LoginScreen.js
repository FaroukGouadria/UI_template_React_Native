import {View, Text, StyleSheet,Dimensions} from 'react-native';
import React, {useState} from 'react';
import TitleText from '../../components/TitleText';
import InputText from '../../components/InputText';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TitleText
        title={'Hello Again!'}
        subTitle={'Welcome Back You ve Been Missed!'}
      />
      <View style={{top:windowHeight/4,position:"relative"}}>
        <InputText
          fieldName={'Email Address'}
          placeHolder={'Email'}
          value={email}
          secure={false}
          onChange={(email)=>setEmail(email)}
        />
        <InputText
          fieldName={'Password'}
          placeHolder={'**********'}
          value={password}
          secure={true}
          onChange={(password)=>setPassword(password)}
        />
      <Text style={{alignSelf:'flex-end'}}>Recovery Password</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#E9EDEF',
  },

});
