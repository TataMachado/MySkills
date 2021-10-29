/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { Home } from './src/pages/Home';


const App = () => {
  return (<>
    <StatusBar bsStyle="light-content" />
    <Home />
  </>
  );



}


export default App;
