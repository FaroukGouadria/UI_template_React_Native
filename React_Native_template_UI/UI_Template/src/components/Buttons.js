import { View, Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Buttons = ({title,onPress}) => {
  return (
        <TouchableOpacity onPress={()=>onPress()} style={styles.btn} >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
  )
}

export default Buttons

const styles=StyleSheet.create({
    btn:{
      height:windowHeight/15,
      backgroundColor:'#5B9EE1',
      borderRadius:50,
      gap:8,
      padding:10,
      alignItems:'center',
      marginTop:20
    },
    title:{
      color:'#fff',
      fontSize:18,
      fontWeight:'500',
      lineHeight:30,
      
    }
})