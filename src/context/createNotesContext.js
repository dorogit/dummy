import React,{ useReducer} from "react";

//an automatic context creator which sends children wrapped with provider, so that all children have access to state and reducer functions
export default (reducerFunction, actions, initialState) => {

    const Context = React.createContext()

    const Provider = ({children}) => {
        //initialize state and dispatch function
        const [state, dispatch] = useReducer(reducerFunction, initialState)

        //bind the actions to an object and then send that object with dispatch so the action will call its function 
        const boundActions = {}
        for (let action in actions) {
            boundActions[action] = actions[action](dispatch)
        }

        return (
            <Context.Provider value = {{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}