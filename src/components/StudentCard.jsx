import { useNavigate } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow flex justify-between items-center">
      <div>
        <p className="font-semibold text-lg">{student.name}</p>
        <p className="text-sm text-gray-600">{student.email}</p>
        <p className="text-sm text-gray-500">{student.phone}</p>
      </div>
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate(`/student/${student.id}`)}
        >
          View
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
