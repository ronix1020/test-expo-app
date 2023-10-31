import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { firebaseAuth } from "./../../../firebaseConfig";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { loginStyles } from "./styles/loginStyles";

export default function Login() {
  const navigation = useNavigation(); // hook para poder hacer uso de la navegacion
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User>();

  const onLogin = () => {
    if (correo === "" || password === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    signInWithEmailAndPassword(firebaseAuth, correo, password)
      .then((userCredential) => {
        console.log(userCredential);
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al registrar un usuario", error);
      });
  };

  const onPressRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={ loginStyles.container }>
      <Text style={ loginStyles.title }>
        Inicia sesion en la app!
      </Text>
      { user !== undefined && (
        <Text>
          Bienvenido {user.email}
        </Text>
      )}
      <View style={ loginStyles.formContainer }>
        <Text>Correo electronico</Text>
        <TextInput
          style={ loginStyles.input }
          onChangeText={(text) => {
            setCorreo(text);
          }}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={ loginStyles.input }
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
        />
        <TouchableOpacity 
        onPress={ onLogin } 
        style={ loginStyles.button }>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ onPressRegister }
          style={ loginStyles.buttonRegister }
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Registrarme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
