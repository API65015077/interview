import { useEffect, useState } from 'react'
import TableData from './component/tabledata'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [tableData, setTableData] = useState();
    const [isNotLoading, setIsNotLoading] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        const hanndleData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const rawData = await res.json();
            setTableData(rawData)
            setIsNotLoading(true)
        } catch(err) {
            console.log(err)
        }
        }

        hanndleData();
    }, [])

    return (
        <div className="App">
        <div className='topoftable'>
            <h1>Listing</h1>
                <button onClick={() => nav('/create-new')} >
                    Create New
                </button>
            <input
            placeholder='Filter by Title'
            type="text" 
            />
        </div>
        
        {isNotLoading &&
            <TableData data={tableData} />
        }

        </div>
    )
}