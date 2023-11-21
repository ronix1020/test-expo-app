import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { firebaseAuth } from "./../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { loginStyles } from "./styles/loginStyles";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function Login() {
  const navigation = useNavigation(); // hook para poder hacer uso de la navegacion
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const onLogin = () => {
    setLoading(true);
    if (correo === "" || password === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      setLoading(false);
      return;
    }

    signInWithEmailAndPassword(firebaseAuth, correo, password)
      .then((userCredential) => {
        // console.log(userCredential);
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al registrar un usuario", error);
      }).finally(() => {
        setLoading(false);
      });
  };

  const onPressRegister = () => {
    navigation.navigate("Register");
  };

  const renderLoading = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    } else {
      return <Text style={ loginStyles.textButton }>Iniciar sesión</Text>;
    }
  }

  return (
    <View style={loginStyles.container}>
      <ExpoStatusBar style="auto" />
      <Text style={ loginStyles.title }>E S C R I T O S</Text>
      <View style={loginStyles.formContainer}>
        <Text style={ loginStyles.label }>Correo electronico</Text>
        <TextInput
          placeholder="example@mail.com"
          style={loginStyles.input}
          onChangeText={(text) => {
            setCorreo(text);
          }}
        />
        <Text style={ loginStyles.label }>Contraseña</Text>
        <TextInput
          style={loginStyles.input}
          placeholder="********"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
        />
        <TouchableOpacity onPress={onLogin} style={loginStyles.button}>
          {renderLoading()}
        </TouchableOpacity>
        <Text
        style={loginStyles.textRegister}
        >
          ¿No tienes cuenta?
        </Text>
        <TouchableOpacity
          onPress={onPressRegister}
          style={loginStyles.buttonRegister}
        >
          <Text style={ loginStyles.textButtonRegister }>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
