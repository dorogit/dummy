import React from "react";
import { View,Text } from "react-native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ( {navigation} ) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log("pressed")} >
          <Feather size={26} name="plus" />
        </TouchableOpacity>
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

export default HomeScreen;