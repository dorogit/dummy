import React from "react";
import { useReducer } from "react";
import createNotesContext from "./createNotesContext";

const notesReducer = (state, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return action.payload    
        default:
            break;
    }
}

const getNotes = (dispatch) => {
    
}