import React, { useContext } from "react";
import { View,Text,StyleSheet } from "react-native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/NotesContext"

const IndexScreen = ( {navigation} ) => {
  const { state,getNotes } = useContext(Context)
  console.log(state)
  console.log(getNotes)
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log("pressed")} >
          <Feather size={26} name="plus" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Notes</Text>
        </View>
      )
    })
  }, [navigation])
  return (
    <View>
      <Text>
        This is the home screen!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default IndexScreen;