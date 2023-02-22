import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native'
const OnBoardingScreen = () => {
  const navigation = useNavigation();

    const DotComponent = ({ selected }) => {
        return (
          <View
            className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
              selected ? "border border-red-400" : ""
            }  p-2`}
          >
            <View
              className={`w-2 h-2 ${
                selected ? "bg-red-400" : "bg-red-200"
              } rounded-full`}
            ></View>
          </View>
        );
      };
    return (
    <Onboarding
    onSkip={()=>navigation.replace("Login")}
    onDone={()=>navigation.replace('Login')}
    DotComponent={DotComponent}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image className='w-72 h-72 object-contain' source={{uri:'https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg'}} />,
        title: 'Happy Shopping',
        subtitle: 'Nisi Lorem nostrud nostrud dolor occaecat non.',
      },
      {
        backgroundColor: '#fff',
        image: <Image className='w-72 h-72 object-contain' source={{uri:'https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top'}} />,
        title: 'All you need in One Place',
        subtitle: 'Laborum qui minim velit ut Lorem.',
      },
      {
        backgroundColor: '#fff',
        image: <Image className='w-72 h-72 object-contain' source={{uri:'https://thumbs.dreamstime.com/b/woman-shopping-sales-happy-young-holding-paper-bags-enjoying-126694001.jpg'}} />,
        title: 'Happy Sale, Happy Customer',
        subtitle: 'Laboris aliqua qui excepteur ad aliqua est ea voluptate cillum.',
      },
    ]}
  />
  
  )
}

export default OnBoardingScreen