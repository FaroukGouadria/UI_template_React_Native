/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/Navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
const App = () => {
console.log(store.getState());
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )

}



export default App;
