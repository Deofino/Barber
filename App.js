import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Create} from "./src/views.js";
import Restrict from "./src/views/Restrict";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Create' component={Create} />
        <Stack.Screen name='Restrict' component={Restrict} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

