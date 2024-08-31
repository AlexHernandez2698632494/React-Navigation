import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const StepScreen = ({ step, description, image, onNextStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>Paso {step}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.descriptionText}>{description}</Text>
      <Button title="Siguiente" onPress={onNextStep} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  stepText: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  descriptionText: {
    textAlign: "center",
    marginBottom: 20,
  },
});

export default StepScreen;
