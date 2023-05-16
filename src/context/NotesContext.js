import createNotesContext from "./createNotesContext";
import jsonServer from "../api/jsonServer";
import {notes} from "../api/json-server/db.json"
import * as FileSystem from 'expo-file-system';

const notesReducer = (state, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return action.payload    
        case "ADD_NOTE":
            console.log("work")
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
            const response = await jsonServer.post('/notes', note )
            console.log(response)
            if (response.status != 201) {
                const filePath = FileSystem.documentDirectory + 'src/api/json-server/db.json';
                const data = await FileSystem.readAsStringAsync(filePath);
                const notesArray = JSON.parse(data).notes

                notesArray.push(note)
                await FileSystem.writeAsStringAsync(filePath, JSON.stringify({ notes: notesArray }));
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