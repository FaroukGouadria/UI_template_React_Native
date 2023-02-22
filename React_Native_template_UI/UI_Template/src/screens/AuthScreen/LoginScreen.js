import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TitleText from '../../components/Text/TitleText';
import InputText from '../../components/InputText/InputText';
import Buttons from '../../components/Button/Buttons';
import LoginForm from '../../helpers/Forms/LoginForm.helpers';
import {Formik} from 'formik';
import LoginSchema from '../../helpers/ValidationYup/Login.helpers';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = ({email, password}) => {
    console.log({email, password});
  };
  const formik = LoginForm(handleSubmit);
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => console.log({values})}
      validationSchema={LoginSchema}>
      {({handleChange, handleBlur, handleSubmit, values, touched, isValid,errors}) => (
        <View style={styles.container}>
          <TitleText
            title={'Hello Again!'}
            subTitle={'Welcome Back You ve Been Missed!'}
          />
          <View style={{top: windowHeight / 4, position: 'relative'}}>
            <InputText
              fieldName={'Email Address'}
              placeHolder={'Email'}
              value={values.email}
              secure={false}
              // onChange={(email)=>setEmail(email)}
              onBlur={handleBlur('email')}
              onChange={handleChange('email')}  
              error={formik.touched.email && formik.errors.email}
              keyboardType="email-address"
            />
            {(errors.email && touched.email) && <Text style={styles.errors}>{errors.email}</Text>}
            
            <InputText
              fieldName={'Password'}
              placeHolder={'**********'}
              value={values.password}
              secure={true}
              // onChange={(password)=>setPassword(password)}
              onBlur={formik.handleBlur('password')}
              onChange={formik.handleChange('password')}
              error={formik.touched.password && formik.errors.password}
            />
              {(errors.password && touched.password) && <Text style={styles.errors}>{errors.password}</Text>}
            <Text style={{alignSelf: 'flex-end'}}>Recovery Password</Text>

            <Buttons title={'Sign In'} onPress={formik.handleSubmit} />
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() => console.log(' move to sign up')}>
              <Text style={{alignSelf: 'center', marginTop: 100}}>
                Don't Have An Account ?
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 100,
                  color: '#000',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}>
                {' '}
                Sign Up For Free
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#E9EDEF',
  },
  errors:{
    fontSize:14,
    color:'red',
    fontWeight:'bold',
    marginTop:5
  }
});
