import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Card } from '@rneui/themed';
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import AsyncStorage from 'react-native'

const IndexScreen = ( {navigation} ) => {
  const { notes,setNotes } = useState([])

  const getAllNotes = async () => {
    // async storage
    const allNotes = await AsyncStorage.getItem('notes');
    setNotes(allNotes)
  }

  const setAllNiortes = (note) =>{
    notes.push(note)
    await AsyncStorage.setItem('notes', notes);
  }

  useEffect(() => {
    getAllNotes()

  }, [navigation])

  
  return (
    <View style = {styles.view}>
      <FlatList 
        data = {state}
        renderItem = {({item})=> (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <CardDivider/>
            <Text>{item.description}</Text>
          </Card>
        )}
        keyExtractor={(item) =>  item.title}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Add Note")} style={styles.buttonStyle} >
        <Text>
          <Feather size={32} name="plus" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flex:1
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewStyle : {
    padding:20
  },
  textStyle: {
    fontSize:24,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  buttonStyle:{
    width:60,
    height:60,
    marginRight:20,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    padding:10,
    borderRadius:100,
    backgroundColor:'#EDEADE',
    borderColor:'black',
    borderWidth:2,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  }
})

export default IndexScreen;