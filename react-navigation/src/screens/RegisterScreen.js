import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [contact, setContact] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const handleRegisterProject = async () => {
    const newProject = {
      id: Date.now().toString(),
      name,
      manager,
      contact,
      socialMedia: socialMedia.split(",").map((s) => s.trim()),
    };

    try {
      const storedProjects = await AsyncStorage.getItem("projects");
      const projects = storedProjects ? JSON.parse(storedProjects) : [];
      projects.push(newProject);
      await AsyncStorage.setItem("projects", JSON.stringify(projects));
      navigation.navigate("Perfil"); // Redirigir a la pantalla de proyectos
    } catch (error) {
      console.error("Error saving project to AsyncStorage", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscribir Nuevo Proyecto de Reciclaje</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Proyecto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Encargado"
        value={manager}
        onChangeText={setManager}
      />
      <TextInput
        style={styles.input}
        placeholder="Contacto"
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        style={styles.input}
        placeholder="Redes Sociales (separadas por comas)"
        value={socialMedia}
        onChangeText={setSocialMedia}
      />
      <Button title="Registrar Proyecto" onPress={handleRegisterProject} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
