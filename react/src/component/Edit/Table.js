import { useState, useEffect } from 'react';
import { AiOutlineUserDelete, AiOutlineUserAdd } from 'react-icons/ai'
import Add from './Add';
import '../../App.css';
import { showEmployees, deleteEmployee } from '../../utils/db'

const Table = () => {
    const [employees, setEmployees] = useState([]);
    const [open, setOpen] = useState(false)

    const readData = async () => {
        try {
            const result = await showEmployees();
            setEmployees(result);
        } catch (err) {
            alert(err)
        }

    }
    const handleDelete = async (employee_ID) => {
        try {
            await deleteEmployee(employee_ID);
            readData();
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        readData();
    }, [])

    return (
        <div className="info">
            {employees.allEmployees &&
                <table>
                    <caption><div><h2>Employee list</h2><AiOutlineUserAdd onClick={() => setOpen(true)} /></div></caption>
                    <thead>
                        <tr>
                            {Object.keys(employees.allEmployees[0]).map(title => <th key={title}>{title}</th>)}
                            <th align='center'>action</th>
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
                                    <td align='center' className="icon">
                                        <AiOutlineUserDelete onClick={() => handleDelete(employee.employee_ID)} />
                                    </td>
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
            <Add open={open} setOpen={setOpen} readData={readData} />
        </div>
    )
}

export default Table
