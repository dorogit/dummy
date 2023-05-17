import React, { useState } from "react";
import { Text,View,TextInput,StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import { stringLiteral } from "@babel/types";

const CreateScreen = ( {navigation} ) => {
  const [ title, setTitle ] = useState('')
  const [ description,setDescription ] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleSubmit = (title, description) => {
    setButtonLoading(true)
    setTimeout(() => {
      navigation.navigate('Notes', { title: title, description: description });
    }, 500);
  }

  return (
    <View style = {styles.viewStyle}>
      <Text>
        Title for the Note:
      </Text>
      <TextInput multiline={true} style = {styles.inputStyleTitle} value={title} onChangeText={(text) => setTitle(text)} />
      <Text>
        Description for the Note:
      </Text>
      <TextInput multiline={true} style = {styles.inputStyleDesc} onChangeText={(text) => setDescription(text)} />
      <Button loading = {buttonLoading} title="Add Note" onPress={() =>{handleSubmit(title, description)}} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    padding:20,
    paddingTop:50
  },
  inputStyleTitle: {
    paddingLeft:20,
    marginTop:10,
    marginBottom:20,
    borderColor:"black",
    borderRadius:10,
    borderWidth:2
  },
  inputStyleDesc: {
    padding:20,
    marginTop:10,
    marginBottom:20,
    borderColor:"black",
    borderRadius:10,
    borderWidth:2,
    height:120,
    textAlignVertical:'top',
  }
})

export default CreateScreen