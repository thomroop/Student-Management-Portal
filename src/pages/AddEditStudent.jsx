import { useDispatch, useSelector } from 'react-redux';
import { addStudent, editStudent } from '../redux/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

function AddEditStudent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingStudent = useSelector((state) =>
    state.students.studentList.find((s) => s.id === Number(id))
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (existingStudent) {
      setFormData({
        name: existingStudent.name,
        email: existingStudent.email,
        phone: existingStudent.phone,
      });
    }
  }, [existingStudent]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('All fields are required!');
      return;
    }

    const newStudent = {
      id: existingStudent ? existingStudent.id : Date.now(),
      ...formData,
    };

    if (existingStudent) {
      dispatch(editStudent(newStudent));
      toast.success('Student updated!');
    } else {
      dispatch(addStudent(newStudent));
      toast.success('Student added!');
    }

    navigate('/students');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {existingStudent ? 'Edit Student' : 'Add Student'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block font-medium">Phone:</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter phone number"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {existingStudent ? 'Update Student' : 'Add Student'}
        </button>
      </form>
    </div>
  );
}

export default AddEditStudent;

