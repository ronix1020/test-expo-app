import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MainLayout } from "../../components/MainLayout";
import { HeaderBar } from "../../components/HeaderBar";
import { firebaseAuth } from "../../../firebaseConfig";
import { TextField } from "../../components/TextField";
import { ColorsApp } from "../../themes/colors";
import { Avatar } from "../../components/Avatar";
import { SettingsItem } from "./components/settingsItem";
import {
  FlowerIcon,
  HelpIcon,
  LanguageIcon,
  LockIcon,
  NotificationIcon,
} from "../../../assets/svg/SvgIcons";

const Profile = () => {
  const user = firebaseAuth.currentUser;
  const [editBio, setEditBio] = React.useState<boolean>(false);

  const configOptions = [
    {
      name: "Notificaciones",
      icon: <NotificationIcon width={30} height={30} />,
    },
    {
      name: "Privacidad",
      icon: <LockIcon width={30} height={30} />,
    },
    {
      name: "Tema",
      icon: <FlowerIcon width={30} height={30} />,
    },
    {
      name: "Idioma",
      icon: <LanguageIcon width={30} height={30} />,
    },
    {
      name: "Ayuda",
      icon: <HelpIcon width={30} height={30} />,
    },
  ];

  return (
    <MainLayout backgroundColor={ColorsApp[100]}>
      <HeaderBar title="Perfil" backIcon />
      <ScrollView>
        <View>
          <Avatar
            avatar={user?.photoURL || "https://picsum.photos/200/300"}
            title={user?.displayName || "Anonimo"}
          />
          <View>
            <TextField
              editable={editBio}
              placeholder="Bio"
              multiline
              numberOfLines={2}
              style={styles.bio}
              maxLength={100}
            />
            <View style={styles.editBioContainer}>
              <TouchableOpacity onPress={() => setEditBio(!editBio)}>
                <Text style={styles.bioSaveButton}>
                  {editBio ? "Guardar bio" : "Editar Bio"}
                </Text>
              </TouchableOpacity>
              {editBio && (
                <TouchableOpacity onPress={() => setEditBio(!editBio)}>
                  <Text style={styles.bioCancelButton}>Cancelar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        {/* optionsContainer */}
        <View style={styles.optionContainer}>
          {configOptions.map((options, index) => {
            return <SettingsItem key={index} options={options} />;
          })}
        </View>
        <TouchableOpacity
          onPress={() => firebaseAuth.signOut()}
          style={styles.authButton}
        >
          <Text style={styles.authTextButton}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  bio: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  editBioContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  bioSaveButton: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    color: ColorsApp[500],
  },
  bioCancelButton: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    color: "gray",
  },
  optionContainer: {
    marginVertical: 20,
  },
  authButton: {
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  authTextButton: {
    color: "red",
    fontWeight: "bold",
    fontFamily: "Lato_700Bold",
  },
});

export default Profile;
