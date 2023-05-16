import React, { useState,useContext } from "react";
import { Text,View,TextInput,StyleSheet,TouchableOpacity } from "react-native";
import { Context } from "../context/NotesContext";

const CreateScreen = ( {navigation} ) => {
  const [title, setTitle] = useState('')
  const [description,setDescription] = useState('')
  const {addNote} = useContext(Context)

  return (
    <View style = {styles.viewStyle}>
      <Text>
        Title for the Note:
      </Text>
      <TextInput style = {styles.inputStyle} value={title} onChangeText={(text) => setTitle(text)} />
      <Text>
        Description for the Note:
      </Text>
      <TextInput style = {[styles.inputStyle,{height:150}]} value={description} onChangeText={(text) => setDescription(text)} />
      <TouchableOpacity onPress={() => addNote(title, description, () => navigation.navigate('Notes'))} >
        <Text>
          Add Note
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    padding:20,
    paddingTop:50
  },
  inputStyle: {
    marginTop:10,
    marginBottom:20,
    borderColor:"black",
    borderRadius:10,
    borderWidth:2
  }
})

export default CreateScreen