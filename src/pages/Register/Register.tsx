import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { firebaseAuth } from "./../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerStyles } from "./styles/registerStyle";

export default function Register() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const onRegister = () => {
    if (correo === "" || password === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (password !== passConfirm) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    createUserWithEmailAndPassword(firebaseAuth, correo, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al registrar un usuario", error);
      });
  };

  return (
    <View style={registerStyles.container}>
      <Text style={registerStyles.title}>Registrate!</Text>
      <View style={registerStyles.formContainer}>
        <Text>Correo electronico</Text>
        <TextInput
          style={registerStyles.input}
          onChangeText={(text) => {
            setCorreo(text);
          }}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={registerStyles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
        />
        <Text>Repetir contraseña</Text>
        <TextInput
          style={registerStyles.input}
          onChangeText={(text) => {
            setPassConfirm(text);
          }}
          secureTextEntry
        />
        <TouchableOpacity onPress={onRegister} style={registerStyles.button}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
