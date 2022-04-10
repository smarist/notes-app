import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((notes,note, index) => (
        <div key={notes.id}>
            <div
                
                className={`title ${
                    notes.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(notes.id)}
            >
                <h4 className="text-snippet">{notes.body.slice(0., 20)}</h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
