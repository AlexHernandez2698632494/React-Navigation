// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "./src/screens/HomeScreen";
// import DetailsScreen from "./src/screens/DetailsScreen";

// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Details" component={DetailsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

// Crea la navegación de la barra de pestañas
const Tab = createBottomTabNavigator();
// Función principal de la aplicación
export default function App() {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Inicio" component={HomeScreen} />
<Tab.Screen name="Perfil" component={DetailsScreen} />
</Tab.Navigator>
</NavigationContainer>
);
}