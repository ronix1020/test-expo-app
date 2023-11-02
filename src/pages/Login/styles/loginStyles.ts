import { StyleSheet } from "react-native";
import { ColorsApp } from "../../../themes/colors";

export const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: ColorsApp[200],
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: ColorsApp[900],
      fontFamily: 'Lato_700Bold',
    },
    formContainer: {
      width: '80%',
      paddingHorizontal: 10,
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: ColorsApp[100],
      shadowColor: ColorsApp[900],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: ColorsApp[900],
      fontFamily: 'Lato_700Bold',
      marginTop: 10,
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 10,
      borderRadius: 10,
      marginTop: 4,
      height: 40,
    },
    button: {
      width: "100%",
      height: 40,
      backgroundColor: ColorsApp[900],
      borderRadius: 10,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textRegister: {
      marginTop: 20,
      fontSize: 14,
      color: ColorsApp[900],
      textAlign: 'center',
    },
    buttonRegister: {
      alignSelf: 'center',
      width: 100,
      borderRadius: 4,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    textButton: { 
      fontWeight: "bold", 
      fontSize: 18,
      color: ColorsApp[50],
      fontFamily: 'Lato_700Bold',
    },
    textButtonRegister: { 
      fontSize: 14,
      color: ColorsApp[900],
      textDecorationLine: 'underline',
      fontFamily: 'Lato_700Bold',
    },
  });