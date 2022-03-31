import { useState, useEffect } from 'react';
import '../../App.css';
import { showEmployees } from '../../utils/db'

const Table = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        showEmployees(setEmployees);
    }, [])

    return (
        <div className="info">
            {employees.allEmployees &&
                <table>
                    <caption><h2>Employee list</h2></caption>
                    <thead>
                        <tr>
                            {Object.keys(employees.allEmployees[0]).map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.allEmployees.map((employee) =>
                                <tr key={employee.employee_ID}>
                                    {Object.values(employee).map((info, index) =>
                                        <td key={index}>
                                            {info}
                                        </td>
                                    )}
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>平均</td>
                            <td></td>
                            <td>{employees.average[0].averageAge}</td>
                            <td></td>
                            <td></td>
                            <td>{employees.average[0].averageWage}</td>
                        </tr>
                    </tfoot>
                </table>
            }

        </div>
    )
}

export default Table
