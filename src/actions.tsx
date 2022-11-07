
export const ADD_NOTE:string = "ADD_NOTE";
export type ADD_NOTE_Action = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): ADD_NOTE_Action => ({
  type: "ADD_NOTE",
  payload: note,
});