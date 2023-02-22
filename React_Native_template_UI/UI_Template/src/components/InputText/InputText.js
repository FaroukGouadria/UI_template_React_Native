import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const InputText = ({fieldName, value, placeHolder, secure, type, onChange,onBlur,error,...props}) => {
  const [hidePassword, setHidePassword] = useState(secure);
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={{margin: 15}}>
      <Text style={[StyleSheet.field, {color: 'black'}]}>{fieldName}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          value={value}
          onBlur={onBlur}
          placeholder={placeHolder}
          placeholderTextColor={'#000'}
          secureTextEntry={hidePassword}
          autoCorrect={false}
          textContentType={type}
          onChangeText={() => onChange()}
          {...props}
          
        />
        {secure ? (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="black"
              style={{right:35,top:5}}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default InputText;
const styles = StyleSheet.create({
  field: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 20,
  },
  input: {
    height: 50,
    width: windowWidth / 1.3,
    borderRadius: 15,
    backgroundColor: '#FFF',
    padding: 16,
    marginTop: 10,
  },
});
