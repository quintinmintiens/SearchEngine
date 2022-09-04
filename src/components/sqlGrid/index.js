import { useState } from "react";
import { useEffect } from "react";

export default function SqlGrid() {
// get data from api
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [searchKey, setSearchKey] = useState(localStorage.getItem("searchKey"));
   
    
    useEffect(() => {        
        setSearchKey(localStorage.getItem("searchKey"));
        
    });

    useEffect(() => {
        if(searchKey == null || searchKey == ""){
            setVisibility(false);
            setLoading(false);
        }else{
            setVisibility(true);
            setLoading(true);
        fetch(`http://localhost:3001/api/results/${searchKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        }
    },

    [searchKey]);
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {visibility && (
                <table className="table-auto bg-white mt-10 mx-auto rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Zoektermid</th>
                            {/* <th className="px-4 py-2">Zoekterm</th> */}
                            <th className="px-4 py-2">Aantal</th>
                            <th className="px-4 py-2">Score</th>
                            <th className="px-4 py-2">Ondernemingsnummer</th>
                            </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.zoektermid}>
                                <td className="border px-4 py-2">{item.zoektermid}</td>
                                {/* <td className="border px-4 py-2">
                                    { 

                                    
        }
                                  </td> */}
                                <td className="border px-4 py-2">{item.aantalKeerVoorkomen}</td>
                                <td className="border px-4 py-2">{Math.floor(Math.random() * 3)+1
                                }</td>
                                <td className="border px-4 py-2">{item.ondernemingsnummer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            )}
        </div>

    );





}