import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Names from './routes/Names';
import Name from './routes/Name';
import api from './api';

export default function App() {
  const Stack = createStackNavigator();

  // const [token, setToken] = useState<string>('');
  const saveToken = async () => {
    const token = await messaging().getToken();
    console.log('Diaco', token);
    const {data} = await api.post('/token', {token});
    console.log(data?.message);
  };

  useEffect(() => {
    saveToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(
        remoteMessage.notification?.title as string,
        JSON.stringify(remoteMessage.notification?.title),
      );
    });

    messaging()
      .subscribeToTopic('topic')
      .then(() => console.log('cadastrado'));

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
