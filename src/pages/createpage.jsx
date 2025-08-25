import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Createpage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const nev = useNavigate();

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        try {  
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    title: title, 
                    body: body,
                    userId: 1
                })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            if (res.status === 201) {
                alert('สร้างสำเร็จ');
            } else {
                alert('เกิดข้อผิดพลาด');
            }

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="createpage">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="body">Body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <div>
                    <button className='cancel-button' onClick={() => nev('/')} type='reset'>Cancel</button>
                    <button type="submit">Save</button>

                </div>
            </form>
        </div>
    )
}