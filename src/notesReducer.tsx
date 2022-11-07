import { ADD_NOTE_Action } from "./actions"
export interface NotesState{
    notes: string[]
};

const initialState={
    notes:[]
};
const ADD_NOTE:string = "ADD_NOTE";
export const notesReducer = (state:NotesState=initialState,action:ADD_NOTE_Action)=>{
    switch(action.type)
    {
        case ADD_NOTE:
        {
            return {...state,notes:[...state.notes,action.payload]};
        }
        default:return state;
    }

};