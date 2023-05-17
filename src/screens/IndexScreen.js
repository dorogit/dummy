import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IndexScreen = ({ route, navigation }) => {
  const [notes, setNotes] = useState([{ "title":"this is my title","description":"this is a desc" }]);

  const getAllNotes = async () => {
    const allNotes = await AsyncStorage.getItem("notes");
    if (allNotes) {
      setNotes(JSON.parse(allNotes));
    }
  };
  
  notes.forEach((note, index) => {
    if (note === undefined) {
      notes.splice(index, 1);
    }
  });

  const setAllNotes = async (note) => {
    const updatedNotes = [...notes, note];
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      console.log(updatedNotes);
    } catch (error) {
      console.log("Error storing notes:", error);
    }
  };  

  useEffect(() => {
    getAllNotes();
    const listener = navigation.addListener("focus", () => {
      setAllNotes(route.params);
    });
    return () => {
      listener.remove();
    };
  }, [navigation]);

  return (
    <View style={styles.view}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <CardDivider />
            <Text>{item.description}</Text>
          </Card>
        )}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Add Note")}
        style={styles.buttonStyle}
      >
        <Text>
          <Feather size={32} name="plus" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewStyle: {
    padding: 20,
  },
  textStyle: {
    fontSize: 24,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  buttonStyle: {
    width: 60,
    height: 60,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#EDEADE",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default IndexScreen;
