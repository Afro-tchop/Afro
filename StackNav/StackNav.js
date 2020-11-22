import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Connexion from "../Connexion/Connexion";
import Drawer from "../Navigation/Drawer";

const Stack = createStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator     
    screenOptions={{
      headerTransparent : true,
      headerTitle: null,
      headerLeft: null
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Drawer" component={Drawer} />
    </Stack.Navigator>
  );
}

export default MyStackNavigator;