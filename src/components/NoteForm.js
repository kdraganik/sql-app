import React, { useState } from "react";

export default function NoteForm({setShowForm}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleClick(){

        const response = await fetch('/api/createNote', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setShowForm(false)
        }
    }

    return (
        <div className="note-form">
            <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea name="content" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="button" onClick={() => handleClick()}>Save</div>
        </div>
    );
}