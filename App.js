import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#9438f5" barStyle="ligth-content" />
      <Routes />
    </NavigationContainer>
  );
}
