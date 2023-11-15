import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextField } from "../../../components/TextField";
import { ColorsApp } from "../../../themes/colors";

interface AddNewWritingModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AddNewWritingModal = ({
  visible,
  onClose,
}: AddNewWritingModalProps) => {
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
            enterKeyHint="done"
          />
          <Text style={styles.labelTextField}>Escribe!</Text>
          <TextField
            placeholder="Título"
            placeholderTextColor={ColorsApp[400]}
            style={styles.textFieldBig}
            multiline
            numberOfLines={4}
            enterKeyHint="done"
            blurOnSubmit
          />
          <TouchableOpacity onPress={() => {}} style={styles.submitButton}>
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
