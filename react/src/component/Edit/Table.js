import { useState, useEffect } from 'react';
import '../../App.css';
import { showEmployees } from '../../utils/db'

const Table = () => {
    const [employees, setEmployees] = useState([]);
    // useEffect(()=>{
    //     showEmployees(setEmployees);
    // },[])

    console.log(employees);
    return (
        <div className="info">
            <table>
                <caption>employee list</caption>
                <thead>
                    <tr>
                        <th>項目</th>
                        <th>金額</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>iPhone 11</td>
                        <td>$24,900</td>
                    </tr>
                    <tr>
                        <td>AirPods</td>
                        <td>$6,490</td>
                    </tr>
                    <tr>
                        <td>iPad Pro</td>
                        <td>$25,900</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>總金額</th>
                        <td>$57,290</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table
