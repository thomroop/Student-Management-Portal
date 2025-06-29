import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function StudentDetail() {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();

  const student = useSelector((state) =>
    state.students.studentList.find((s) => s.id === Number(id))
  );

  if (!student) {
    return (
      <div className="p-4 text-red-500 font-semibold">
        Student not found.
        <br />
        <button
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
          onClick={() => navigate('/students')}
        >
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-2xl font-bold">Student Details</h2>
      <p><span className="font-semibold">Name:</span> {student.name}</p>
      <p><span className="font-semibold">Email:</span> {student.email}</p>
      <p><span className="font-semibold">Phone:</span> {student.phone}</p>

      <button
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
        onClick={() => navigate('/students')}
      >
        Back to List
      </button>
    </div>
  );
}

export default StudentDetail;
