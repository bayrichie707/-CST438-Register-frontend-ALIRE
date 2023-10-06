import React, { useState, useEffect } from 'react';
import {SERVER_URL, SEMESTERS} from '../constants';

const AdminHome = ()  => {

    const params = new URLSearchParams(window.location.search);
    const studentId = params.get("student_id"); 
    const [students, setStudents] = useState([]);  // list of students

    useEffect(() => {
        // called once after intial render
        fetchStudents(studentId);
        }, [studentId] )


    const fetchStudents = (studentId) => {
		//TODO complete this method to fetch students and display list of students

        // fetch(`${SERVER_URL}/student?student=${studentId}`)
        fetch(`${SERVER_URL}/student`)
        .then((response) => { return response.json(); } )
        .then((data) => { setStudents(data); })
        .catch((err) =>  { 
            console.log("exception fetchCourses "+err);
            setMessage("Exception. "+err);
        } );
    }


    const headers = ['Student ID', 'Name', 'Email', 'Status', 'Status Code'];

    return (
        <div> 
        <div margin="auto" >
          <h3>Student List</h3>
        </div>
        <table className="Center"> 
                    <thead>
                    <tr>
                        {headers.map((s, idx) => (<th key={idx}>{s}</th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((row,idx) => (
                            <tr key={idx}>
                            <td>{row.studentId}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.status}</td>
                            <td>{row.statusCode}</td>
                            {/* <td><button type="button" margin="auto" onClick={dropCourse}>Drop</button></td> */}
                            </tr>
                        ))}
                    </tbody>
          </table>
      </div>
    )
}

export default AdminHome;