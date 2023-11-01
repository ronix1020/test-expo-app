import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import { RootStackParamList } from './src/interfaces/RootStackParamList';

// realizamos una declaracion global de type RootStackParamList para 
// que el hook useNavigation pueda hacer uso de la navegacion
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;