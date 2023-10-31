import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import Register from './src/pages/Register/Register';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};
// realizamos una declaracion global de type RootStackParamList para 
// que el hook useNavigation pueda hacer uso de la navegacion
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;