import createNotesContext from "./createNotesContext";
import jsonServer from "../api/jsonServer";
import {notes} from "../api/json-server/db.json"
import * as RNFS from 'react-native-fs'

const notesReducer = (state, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return action.payload    
        case "ADD_NOTE":
            return [...state, action.payload]
        default:
            return state
    }
}

const getNotes = (dispatch) => {
    return async () => {
        response = await jsonServer.get('/notes')
        try {
            response = await jsonServer.get('/notes')
            console.log(response)
            if (response.status === 200) {
                dispatch({ type:"GET_NOTES", payload:notes })
            } else {
                dispatch({ type:"GET_NOTES", payload:response.data })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const addNote = (dispatch) => {
    return async (title, description, callback) => {
        const note = {title:title, description:description, id: Math.floor(Math.random()*10000)}
        try {
            const response = await jsonServer.post('/Notes', note )
            if (response.status != 201) {
                const filePath = RNFS.DocumentDirectoryPath + '/src/api/json-server/db.json'
                const data = await RNFS.readFile(filePath)
                const notesArray = JSON.parse(data).notes

                notesArray.push(note)
                await RNFS.writeFile(filePath, JSON.stringify({ notes: notesArray }));
            }
            dispatch({type:"ADD_NOTE", payload: note})
            callback()
        } catch (error) {
            console.log(error)
        }
    }
}

 export const {Context, Provider} = createNotesContext(
    notesReducer,
    { getNotes, addNote },
    notes
)