import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Names from './routes/Names';
import Name from './routes/Name';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nomes">
        <Stack.Screen
          name="Nomes"
          component={Names}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nome"
          component={Name}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
