import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons"; // Asegúrate de que este paquete esté bien instalado
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import StepsScreen from "./src/screens/StepsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RecyclingStepsStack = ({ navigation }) => {
  const steps = [
    // Asegúrate de que las imágenes existan y estén correctamente referenciadas
    {
      step: 1,
      description: "Separa los materiales reciclables del resto de la basura.",
      image: require("./assets/step1.png"),
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Inicio");
    }, 3000 * steps.length);

    return () => clearTimeout(timer);
  }, [navigation, steps.length]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Pasos de Reciclaje">
        {(props) => <StepsScreen {...props} steps={steps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reciclaje">
        <Stack.Screen
          name="Reciclaje"
          component={RecyclingStepsStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Inicio">
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Inicio") {
                    iconName = "home-outline";
                  } else if (route.name === "Perfil") {
                    iconName = "person-outline";
                  } else if (route.name === "Inscribir") {
                    iconName = "create-outline";
                  }

                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#1E90FF",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Inicio" component={HomeScreen} />
              <Tab.Screen name="Perfil" component={DetailsScreen} />
              <Tab.Screen name="Inscribir" component={RegisterScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
