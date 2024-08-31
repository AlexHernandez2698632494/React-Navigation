import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StepsScreen from "./src/Screens/StepsScreen";

const App = () => {
  const steps = [
    {
      step: 1,
      description: "Separa los materiales reciclables del resto de la basura.",
      image: require("./assets/step1.png"), // Asegúrate de tener esta imagen en la carpeta de assets
    },
    {
      step: 2,
      description: "Lava los envases antes de reciclarlos.",
      image: require("./assets/step2.jpeg"),
    },
    {
      step: 3,
      description: "Identifica los contenedores de reciclaje de tu área.",
      image: require("./assets/step3.jpeg"),
    },
    {
      step: 4,
      description: "Coloca los materiales reciclables en los contenedores correspondientes.",
      image: require("./assets/step4.jpg"),
    },
  ];

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pasos de Reciclaje">
          {(props) => <StepsScreen {...props} steps={steps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
