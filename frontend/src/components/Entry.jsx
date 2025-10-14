import react from 'react'
import "../styles/Home.css"

function Entry({ entry, onDelete }) {

    const formattedDate = new Date(entry.created_at).toLocaleDateString('en-US');

    return (
        <div className="entry-container">
            <p className="entry-title">{entry.title}</p>
            <p className="entry-content">{entry.content}</p>
            <p className="entry-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(entry.id)}>
                Delete
            </button>
        </div>
    );
}

export default Entry;