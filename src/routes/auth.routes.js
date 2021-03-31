import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../pages/LoginPage";
import Cadastrar from "../pages/Cadastrar";

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
