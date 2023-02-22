import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TitleText = ({title,subTitle}) => {
  return (
    <View style={{top:110}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default TitleText;
const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 32,
    alignSelf: 'center',
    lineHeight: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
    color:'#1A2530'
  },
  subtitle:{
    fontWeight: '400',
    fontSize: 16,
    alignSelf: 'center',
    lineHeight: 24,
    color:'#707B81'
  }
});
