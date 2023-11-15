import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { RootStackParamList } from "./src/interfaces/RootStackParamList";
import { firebaseAuth } from "./firebaseConfig";
import {
  useFonts,
  Lato_400Regular,
  Lato_300Light,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AppNavigator from "./src/navigation/AppNavigator";
import { User } from "firebase/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
  // declaramos un estado para guardar el usuario
  const [user, setUser] = useState<User>();
  const [isAppReady, setIsAppReady] = useState(false);
  // necesitamos cargar las fuentes antes de renderizar el contenido de la app
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_700Bold,
  });

  useEffect(() => {
    // comprobamos si el usuario esta logueado
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // si el usuario esta logueado, lo guardamos en el estado
        setUser(user);
        console.log("user is logged");
      } else {
        // si el usuario no esta logueado, lo eliminamos del estado
        setUser(undefined);
        console.log("user is not logged");
      }

      // una vez comprobado si el usuario esta logueado o no, procedemos a 
      // dar por finalizada la carga de la app
      setIsAppReady(true);
    });
  }, [])


  // mediante un useEffect comprobamos si el usuario esta logueado y
  // tambien si las fuentes estan cargadas
  useEffect(() => {
    // comprobamos si las fuentes estan cargadas
    onLoadFonts();
  }, [fontsLoaded, fontError, isAppReady]);

  const onLoadFonts = async () => {
    // si las fuentes no estan cargadas, no hacemos nada
    if (fontsLoaded && isAppReady && fontError === null) {
      // si las fuentes estan cargadas, ocultamos el splash screen
      await SplashScreen.hideAsync();
    }
  };

  // si las fuentes no estan cargadas, no renderizamos nada
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        {/* comprobamos si existe usuario logueado o no  */}
        { user ? <AppNavigator /> : <AuthNavigator /> }
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
