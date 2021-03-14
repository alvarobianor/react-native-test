import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Names from './routes/Names';
import Name from './routes/Name';

export default function App() {
  const Stack = createStackNavigator();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('Close your app', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

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
