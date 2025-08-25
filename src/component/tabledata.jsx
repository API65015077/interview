
export default function TableData({data}) {
    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>User ID</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) =>
                    <tr key={item.id} > 
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td >{item.userId}</td>
                    </tr>
                )}
            </tbody>
            </table>
        
    )
}