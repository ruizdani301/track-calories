import { ReactNode,createContext, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

type ActivityProviderProps = {
    children: ReactNode
}

// DEfino los valores q voy a transportar en el context
type ActivityContextProps = {
    state: ActivityState,
    dispatch: React.Dispatch<ActivityActions>
  
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

// Aquí es donde ejecutas useReducer o useState para crear y
// gestionar el estado central.
export const ActivityProvider = ({children}: ActivityProviderProps )=> {
    
    const [state, dispatch] = useReducer(activityReducer, initialState)

    return (
        // value={} es lo q se comparte con todos los componentes
        // envueltos por este provider
        <ActivityContext.Provider value={{state, dispatch}}>
            {/* Children components will go here */}
            {children}
        </ActivityContext.Provider>
    )
}