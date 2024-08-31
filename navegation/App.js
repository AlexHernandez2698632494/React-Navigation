import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={DetailsScreen} />
      <Stack.Screen name="Inscribir" component={RegisterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
