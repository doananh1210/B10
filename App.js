import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Đăng nhập' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chính' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
