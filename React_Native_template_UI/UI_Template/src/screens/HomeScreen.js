import {View, Text} from 'react-native';
import React from 'react';
import {StyledComponent} from 'nativewind';
import {useColorScheme} from 'nativewind';
const HomeScreen = () => {
  const {colorScheme, setColorScheme} = useColorScheme();
  return (
    <>
      <Text
        onPress={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }>
        {`The color scheme is ${colorScheme}`}
      </Text>
    </>
  );
};

export default HomeScreen;
