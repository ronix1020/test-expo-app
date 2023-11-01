import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/RootStackParamList';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name="Login"
        component={Login} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
  );
}