import React, { useState } from "react";
import { Text,View,TextInput,StyleSheet,TouchableOpacity } from "react-native";

const CreateScreen = ( {navigation} ) => {
  const [ title, setTitle ] = useState('')
  const [ description,setDescription ] = useState('')

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
      <TouchableOpacity onPress={() =>{navigation.navigate('Notes', {title:title, description:description})}} >
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