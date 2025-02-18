import NoteForm from "@/components/NoteForm";
import { useState, useEffect } from "react";

export default function MainView() {

    const [showForm, setShowForm] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
    fetch('/api/getNotes')
        .then(response => response.json())
        .then(data => setNotes(data.notes));
    }, []);

    console.log(notes);

    return (
        <>
            <h1>Notes</h1>
            {
                showForm 
                ? <NoteForm setShowForm={setShowForm}/> 
                : <div className="button create-note-button" onClick={()=>setShowForm(true)}>+Create Note</div>
            } 
        </>
    );
}