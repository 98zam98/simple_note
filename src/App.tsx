
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

 const App=()=> {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);

  const dispatch = useDispatch();
  
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
    <NewNoteInput addNote={onAddNote} />
    <hr />
    <ul>
      {notes.map((note) => {
        return <li key={note}>{note}</li>;
      })}
    </ul>
    </div>
  );
}

export default App;
