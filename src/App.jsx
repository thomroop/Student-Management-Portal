import { Routes, Route, Navigate } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';
import AddEditStudent from './pages/AddEditStudent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="p-4 max-w-4xl mx-auto min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 shadow-inner">
      <h1 className="text-2xl font-bold text-center mb-4">
        Student Management Portal
      </h1>

      <Routes>
        <Route path="/" element={<Navigate to="/students" />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetail />} />
        <Route path="/add" element={<AddEditStudent />} />
        <Route path="/edit/:id" element={<AddEditStudent />} />
      </Routes>

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
