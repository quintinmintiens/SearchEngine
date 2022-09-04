import { useState } from "react";
import { useEffect } from "react";
export default function SqlGrid() {
// get data from api
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        fetch('http://localhost:3001/api/results/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, console.log('Data fetched'),

    []);
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && (
                <table>
                    <thead>
                        <tr>
                            <th>zoektermid</th>
                            <th>aantalKeerVoorkomen</th>
                            <th>score</th>
                            <th>ondernemingsnummer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.zoektermid}>
                                <td>{item.aantalKeerVoorkomen}</td>
                                <td>{item.score}</td>
                                <td>{item.ondernemingsnummer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>

    );





}