import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const [projects, setProjects] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Cargar los datos de AsyncStorage cuando se monta el componente
    const loadProjects = async () => {
      try {
        const storedProjects = await AsyncStorage.getItem("projects");
        if (storedProjects !== null) {
          setProjects(JSON.parse(storedProjects));
        }
      } catch (error) {
        console.error("Error loading projects from AsyncStorage", error);
      }
    };
    loadProjects();
  }, []);

  const renderProjectItem = ({ item }) => (
    <View style={styles.projectItem}>
      <View style={styles.projectInfo}>
        <Text style={styles.projectName}>{item.name}</Text>
        <Text>Encargado: {item.manager}</Text>
        <Text>Contacto: {item.contact}</Text>
      </View>
      <View style={styles.socialMediaIcons}>
        {item.socialMedia.map((social, index) => (
          <Image
            key={index}
            source={getSocialMediaIcon(social)}
            style={styles.socialMediaIcon}
          />
        ))}
      </View>
    </View>
  );

  const getSocialMediaIcon = (social) => {
    switch (social) {
      case "facebook":
        return require("../../assets/facebook.png");
      case "x":
        return require("../../assets/x.png");
      case "instagram":
        return require("../../assets/instagram.png");
      case "linkedin":
        return require("../../assets/linkedin.png");
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Proyectos de Reciclaje</Text>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Inscribir Proyecto"
        onPress={() => navigation.navigate("Inscribir")}
      />
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
  projectItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  socialMediaIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
