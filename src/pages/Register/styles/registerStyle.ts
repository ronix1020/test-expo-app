import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    formContainer: {
      width: 250,
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: '#bababa'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 10,
      borderRadius: 10,
      marginTop: 4,
      height: 40,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: 'gray',
      borderRadius: 10,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })