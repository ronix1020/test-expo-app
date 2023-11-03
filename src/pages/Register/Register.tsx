import { useState } from "react";
import { firebaseAuth } from "./../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { registerStyles } from "./styles/registerStyle";
import { ColorsApp } from "../../themes/colors";

export default function Register() {
  const navigation = useNavigation(); // hook para poder hacer uso de la navegacion
  const [userName, setUserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [policyVisible, setPolicyVisible] = useState(false);

  const onRegister = () => {
    setLoading(true);
    if (
      correo === "" ||
      password === "" ||
      passConfirm === "" ||
      userName === ""
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      setLoading(false);
      return;
    }

    if (password !== passConfirm) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(firebaseAuth, correo, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: userName,
        })
          .then(() => {
            console.log("Usuario registrado correctamente");
          })
          .catch((error) => {
            console.error(
              "Ha ocurrido un error al actualizar el perfil del usuario",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al registrar un usuario", error);
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderLoading = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    } else {
      return <Text style={registerStyles.textButton}>Crear cuenta</Text>;
    }
  };

  return (
    <View style={registerStyles.container}>
      <Text style={registerStyles.title}>¡Crea tu cuenta!</Text>
      <View style={registerStyles.formContainer}>
        <Text style={registerStyles.label}>Nombre de usuario</Text>
        <TextInput
          placeholder="Nombre de usuario"
          style={registerStyles.input}
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <Text style={registerStyles.label}>Correo electronico</Text>
        <TextInput
          placeholder="example@mail.com"
          style={registerStyles.input}
          onChangeText={(text) => {
            setCorreo(text);
          }}
        />
        <Text style={registerStyles.label}>Contraseña</Text>
        <TextInput
          onFocus={() => setPolicyVisible(true)}
          placeholder="********"
          style={registerStyles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
        />
        {/* en dado caso el usuario no cumpla con la politica de 
        contraseñas, se mostrara un mensaje */}
        <View
          style={{
            ...registerStyles.policyContainer,
            display: policyVisible && !(password.length >= 6) ? "flex" : "none",
          }}
        >
          <Text
            style={{
              ...registerStyles.textInfo,
              color: ColorsApp[900],
            }}
          >
            - La contraseña debe tener al menos 6 caracteres
          </Text>
        </View>
        <Text style={registerStyles.label}>Repetir contraseña</Text>
        <TextInput
          placeholder="********"
          style={registerStyles.input}
          onChangeText={(text) => {
            setPassConfirm(text);
          }}
          secureTextEntry
        />
        <TouchableOpacity onPress={onRegister} style={registerStyles.button}>
          {renderLoading()}
        </TouchableOpacity>
        <Text style={registerStyles.textLogin}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={registerStyles.buttonLogin}
        >
          <Text style={registerStyles.textButtonLogin}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
