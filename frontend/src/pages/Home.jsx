import { useState, useEffect } from 'react'
import Entry from '../components/Entry'
import api from '../api'
import "../styles/Home.css"

const Home = () => {
    // Send an authorised request to get entries
    const [entries, setEntries] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getEntries();
    })

    const getEntries = async () => {
        api.get("/api/entries/")
        .then((response) => response.data)
        .then((data) => { setEntries(data); console.log(data) })
        .catch((error) => alert(error));
    };

    const deleteEntry = (id) => {
        api.delete(`/api/entries/delete/${id}/`)
        .then((response) => {
            if (response.status === 204) {
                alert("Entry deleted");
            } else {
                alert("Failed to delete entry")
            };
            getEntries(); // NOT OPTIMAL. SHOULD UPDATE STATE INSTEAD.
            })
        .catch((error) => alert(error));
    };

    const createEntry = async () => {
        api.post("/api/entries/", { title, content })
        .then((response) => {
            if (response.status === 201) {
                alert("Entry created");
            } else {
                alert("Failed to create entry");
            };
            getEntries(); // NOT OPTIMAL. SHOULD UPDATE STATE INSTEAD.
            })
        .catch((error) => alert(error));
        };


    return <>
        <div>
            <div>
                <h1>Entries</h1>
                {entries.map((entry) => (
                    <Entry entry={entry} key={entry.id} onDelete={deleteEntry} />
                ))}
            </div>

            <h2>Create Entry</h2>
            <form onSubmit={createEntry}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br/>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                ></textarea>
                <br/>
                <button type="submit">Create Entry</button>

            </form>
        </div>
    </>
}

export default Home;