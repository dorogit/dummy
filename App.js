import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/NotesContext";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Notes" component={IndexScreen} />
        <Stack.Screen name = "Add Note" component={CreateScreen} />
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