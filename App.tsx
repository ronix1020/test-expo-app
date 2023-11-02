import React, { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import { RootStackParamList } from './src/interfaces/RootStackParamList';
import { firebaseAuth } from './firebaseConfig';
import { useFonts, Lato_400Regular, Lato_300Light, Lato_700Bold } from '@expo-google-fonts/lato';

// realizamos una declaracion global de type RootStackParamList para 
// que el hook useNavigation pueda hacer uso de la navegacion
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// activamos el splash screen y evitamos que se oculte automaticamente
SplashScreen.preventAutoHideAsync();

function App() {

  // necesitamos cargar las fuentes antes de renderizar el contenido de la app
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_700Bold,
  });

  // mediante un useEffect comprobamos si el usuario esta logueado y 
  // tambien si las fuentes estan cargadas
  useEffect(() => {
    // comprobamos si el usuario esta logueado
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is logged');
      } else {
        console.log('user is not logged');
      }
    });
    // comprobamos si las fuentes estan cargadas
    onLoadFonts();
  }, [fontsLoaded, fontError])

  const onLoadFonts = async () => {
    if (fontsLoaded || fontError) {
      // si las fuentes estan cargadas, ocultamos el splash screen
      await SplashScreen.hideAsync();
    }
  }

  // si las fuentes no estan cargadas, no renderizamos nada
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;