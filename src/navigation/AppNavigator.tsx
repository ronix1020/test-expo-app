import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/RootStackParamList';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/ProfileScreen';

// dentro de este AppStack se iran agregando las pantallas 
// que el usuario podra ver una vez que este logueado

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName='Home'>
        <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
        />
        <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
        />
    </AppStack.Navigator>
  );
}