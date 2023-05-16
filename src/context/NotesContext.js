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
    response = await jsonServer.get('/notes')
    dispatch({ type:"GET_NOTES", payload:response })
}

 export const {Context, Provider} = createNotesContext(
    notesReducer,
    {getNotes},
    notes
)