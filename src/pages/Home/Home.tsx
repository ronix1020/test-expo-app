import React from 'react';
import { View, Text, Button } from 'react-native';
import { firebaseAuth } from '../../../firebaseConfig';


export default function Home() {
    const user = firebaseAuth.currentUser;

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Bienvenido de nuevo {user?.displayName}
            </Text>
            <Button 
            title='Cerrar sesion'
            color={'red'}
            onPress={() => {
                // funcion que nos permite cerrar sesion
                firebaseAuth.signOut();
            }}
            />
        </View>
    )
}