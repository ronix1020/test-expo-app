import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { TextField } from "../../../components/TextField";
import { ColorsApp } from "../../../themes/colors";
import { postWriting } from "../../../services/writingsService";
import { firebaseAuth } from "../../../../firebaseConfig";
import { ListColors } from "./listColors";

interface AddNewWritingModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AddNewWritingModal = ({
  visible,
  onClose,
}: AddNewWritingModalProps) => {
  const user = firebaseAuth.currentUser;
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [colorBackground, setColorBackground] = React.useState<string>('')


  // funcion para poder hacer un escrito
  const onPostWriting = async () => {
    if (!title || !content || !colorBackground) {
      Alert.alert("Campos vacios", "Por favor llena todos los campos");
      return;
    }

    await postWriting(
      title,
      content,
      colorBackground,
      "https://picsum.photos/200/300",
      user?.displayName || "Anonimo",
    )
      .then((response) => {
        Alert.alert("Escrito creado", "Se ha creado el escrito correctamente");
        onClose();
      })
      .catch((error) => {
        Alert.alert("Error", "Ha ocurrido un error al crear el escrito");
      });
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Crea un nuevo escrito!</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.iconCloseButton}>x</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.labelTextField}>Ponle un título</Text>
          <TextField
            placeholder="Título"
            placeholderTextColor={ColorsApp[400]}
            style={styles.textField}
            onChangeText={(text) => setTitle(text)}
            enterKeyHint="done"
          />
          <Text style={styles.labelTextField}>Escribe!</Text>
          <TextField
            placeholder="Contenido del escrito"
            placeholderTextColor={ColorsApp[400]}
            style={styles.textFieldBig}
            onChangeText={(text) => setContent(text)}
            multiline
            numberOfLines={4}
            enterKeyHint="done"
            blurOnSubmit
          />
          <Text style={styles.labelTextField}>
            Selecciona un color para tu escrito
          </Text>
          <ListColors 
          colorSelected={colorBackground}
          setColorSelected={setColorBackground}
          /> 
          <TouchableOpacity onPress={onPostWriting} style={styles.submitButton}>
            <Text style={styles.textSubmitButton}>Crear escrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "90%",
    margin: 20,
    backgroundColor: ColorsApp[100],
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Lato_700Bold",
    color: ColorsApp[500],
    textAlign: "center",
  },
  labelTextField: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: ColorsApp[500],
  },
  closeButton: {
    height: 40,
    width: 40,
    paddingBottom: 4,
    backgroundColor: ColorsApp[200],
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCloseButton: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: ColorsApp[500],
    textAlign: "center",
  },
  textField: {
    width: "100%",
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
  },
  textFieldBig: {
    width: "100%",
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
    height: 200,
    textAlignVertical: "top",
    paddingVertical: 10,
  },
  submitButton: {
    height: 40,
    width: "100%",
    backgroundColor: ColorsApp[200],
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textSubmitButton: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    color: ColorsApp[500],
  },
});
