import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/NotesContext";
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return(
    <Provider>
      <App/>
    </Provider>
  )
};