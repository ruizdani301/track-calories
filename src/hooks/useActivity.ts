import {useContext} from 'react'
import { ActivityContext } from '../context/ActivityContext.tsx';

// este el el customhook que se usara en los componentes para
//  acceder al context y obtener state y dispatch de useReducer
//
export const useActivity = () => {
    const context = useContext(ActivityContext);

    if (!context) {
        throw new Error('useActivity must be used within an ActivityProvider');
    }

    return context;
}