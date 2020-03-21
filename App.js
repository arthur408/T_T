// App

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppContainer from './source';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}