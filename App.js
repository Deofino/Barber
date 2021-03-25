import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Restrict } from "./src/views";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Restrict' component={Restrict} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

