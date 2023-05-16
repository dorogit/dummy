import createNotesContext from "./createNotesContext";
import jsonServer from "../api/jsonServer";
import notes from "./db.json"

const notesReducer = (state, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return action.payload    
        default:
            break;
    }
}

const getNotes = async (dispatch) => {
    return async () => {
        try {
            response = await jsonServer.get('/notes')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        dispatch({ type:"GET_NOTES", payload:response.data })
    }
}

 export const {Context, Provider} = createNotesContext(
    notesReducer,
    {getNotes},
    notes
)