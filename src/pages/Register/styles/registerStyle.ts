import { StyleSheet } from 'react-native';
import { ColorsApp } from '../../../themes/colors';

export const registerStyles = StyleSheet.create({
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
    textButton: {
      fontSize: 18,
      fontWeight: "bold",
      color: ColorsApp[50],
      textAlign: 'center',
    },
    textLogin: {
      fontSize: 14,
      color: ColorsApp[900],
      textAlign: 'center',
      marginTop: 20,
    },
    buttonLogin: {
      width: 150,
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 8,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    textButtonLogin: { 
      fontSize: 14,
      color: ColorsApp[900],
      textDecorationLine: 'underline',
      fontFamily: 'Lato_700Bold',
    },
    textInfo: {
      fontSize: 14,
      color: ColorsApp[900],
      textAlign: 'center',
    },
    policyContainer: {
      backgroundColor: ColorsApp[50],
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
    }
  })