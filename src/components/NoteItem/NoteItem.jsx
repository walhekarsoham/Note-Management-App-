import "./NoteItem.css";

function NoteItem({ note, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-content">
        <h3>{note.title}</h3>
        {note.description && <p>{note.description}</p>}
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(note.id)}
        aria-label="Delete note"
      >
        Delete
      </button>
    </div>
  );
}

export default NoteItem;
