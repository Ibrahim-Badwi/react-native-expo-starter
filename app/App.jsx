import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './components/Screen';
import AppNavigator from './navigation/AppNavigator';

const App = () => (
  <Screen>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </Screen>
);

export default App;
