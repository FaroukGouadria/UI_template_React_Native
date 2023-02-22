import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

const Buttons = ({title,onPress}) => {
  return (
        <TouchableOpacity onPress={()=>onPress()} >
            <Text >
                {title}
            </Text>
        </TouchableOpacity>
  )
}

export default Buttons

const styles=StyleSheet.create({

})