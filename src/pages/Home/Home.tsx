import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { firebaseAuth } from "../../../firebaseConfig";
import { getAllWritings } from "../../services/writingsService";
import { WritingsInterface } from "../../interfaces/HomeInterfaces";
import { RenderWritings } from "./components/renderWritings";
import { MainLayout } from "../../components/MainLayout";
import { HeaderBar } from "../../components/HeaderBar";
import { ColorsApp } from "../../themes/colors";
import { FAB } from "../../components/FAB";
import { AddNewWritingModal } from "./components/addNewWritingModal";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { navigate } = useNavigation();
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
        setWritings(response.reverse());
      })
      .catch((error) => {
        console.log("Error", error);
        Alert.alert("Error", "Ha ocurrido un error al obtener los escritos");
      });
  };

  return (
    <MainLayout>
      <HeaderBar
        title={`E S C R I T O S`}
        renderRightComponent={
          <TouchableOpacity
            onPress={() => navigate('Profile')}
            style={styles.buttonLogout}
          >
            <Image 
            source={require('./../../../assets/images/profile_icon.png')}
            style={{
              width: 30,
              height: 30
            }}/>
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
        onClose={() => {
          setWritingModal(false)
          getWrittings()
        }}
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
