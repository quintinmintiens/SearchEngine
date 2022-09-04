// Component that gets data from the mysql database


// export default function sqlGrid() {
// var mysql = require('mysql');
//     // connect to the database
//         const connection = mysql.createConnection({
//             host: '127.104.250.49',
//             user: 'quintin',
//             password: 'Kaas1212*',
//             database: 'Dataproject'
//         });

//     // get the data from the database
//         connection.query('SELECT * FROM Zoekresultaat LIMIT 50', function (error, results, fields) {
//             if (error) throw error;
//             console.log('The solution is: ', results);
//         });
//         // close the connection
//         connection.end();
//     // return the results in an html grid
//     return(
//         <div>
//             <table>
//                 <tr>
//                     <th>resultaatID</th>
//                     <th>zoektermID</th>
//                     <th>aantalKeerVoorkomen</th>
//                     <th>score</th>
//                     <th>ondernemingsnummer</th>
//                 </tr>
//                 {results.map((item, index) => {
//                     return (
//                         <tr key={index}>
//                             <td>{item.resultaatID}</td>
//                             <td>{item.zoektermID}</td>
//                             <td>{item.aantalKeerVoorkomen}</td>
//                             <td>{item.score}</td>
//                             <td>{item.ondernemingsnummer}</td>
                         
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>
//     );
    
//     }