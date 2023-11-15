import React, { useEffect, useState } from "react";
import {
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { firebaseAuth } from "../../../firebaseConfig";
import { getAllWritings, postWriting } from "../../services/writingsService";
import { WritingsInterface } from "../../interfaces/HomeInterfaces";
import { RenderWritings } from "./components/renderWritings";
import { MainLayout } from "../../components/MainLayout";
import { HeaderBar } from "../../components/HeaderBar";
import { ColorsApp } from "../../themes/colors";
import { FAB } from "../../components/FAB";
import { AddNewWritingModal } from "./components/addNewWritingModal";

export default function Home() {
  const user = firebaseAuth.currentUser;
  const [writings, setWritings] = useState<WritingsInterface[]>();
  const [writingModal, setWritingModal] = useState(false);

  useEffect(() => {
    getWrittings();
  }, []);

  // funcion que nos permite obtener todos los escritos
  const getWrittings = async () => {
    await getAllWritings()
      .then((response) => {
        // console.log("Respuesta", response);
        setWritings(response);
      })
      .catch((error) => {
        console.log("Error", error);
        Alert.alert("Error", "Ha ocurrido un error al obtener los escritos");
      });
  };

  // funcion para poder hacer un escrito
  const onPostWriting = async () => {
    await postWriting(
      "Escrito 2",
      "Un ejemplo de un texto",
      "#fffffd",
      "https://picsum.photos/200/300",
      "Jonh"
    )
      .then((response) => {
        getWrittings();
        Alert.alert("Escrito creado", "Se ha creado el escrito correctamente");
      })
      .catch((error) => {
        Alert.alert("Error", "Ha ocurrido un error al crear el escrito");
      });
  };

  return (
    <MainLayout>
      <HeaderBar
        title={`E S C R I T O S`}
        renderRightComponent={
          <TouchableOpacity
            onPress={() => firebaseAuth.signOut()}
            style={styles.buttonLogout}
          >
            <Text style={styles.textLogout}>Cerrar sesión</Text>
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.scrollContainer}>
        <RenderWritings writings={writings} />
      </ScrollView>
      <FAB 
        title={'Crear escrito'}
        onPress={() => setWritingModal(true)}
      />
      <AddNewWritingModal 
        visible={ writingModal }
        onClose={() => setWritingModal(false)}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  buttonLogout: {
    marginLeft: "auto",
  },
  textLogout: {
    color: "red",
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: ColorsApp[100],
  },
});
