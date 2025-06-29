import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents, deleteStudent } from '../redux/studentSlice';
import StudentCard from '../components/StudentCard';


function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.studentList);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        const formattedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }));

        dispatch(setStudents(formattedData));
      })
      .catch((err) => {
        console.error(err);
        alert('Error fetching student data');
      });
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Student List</h2>
        <a
          href="/add"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Student
        </a>
      </div>

      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        students.map((student) => (
          <StudentCard key={student.id} student={student} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default StudentList;