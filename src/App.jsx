import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import QuestionBank from './components/QuestionBank';
import AdminMockExams from './components/AdminMockExams';
import ClassManagement from './components/ClassManagement';
import ExamResults from './components/ExamResults';
import Analytics from './components/Analytics';
import DepartmentManagement from './components/DepartmentManagement';
import RolesPermissions from './components/RolesPermissions';
import Attendance from './components/Attendance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/question-bank" element={<QuestionBank />} />
          <Route path="/mock-exams" element={<AdminMockExams />} />
          <Route path="/class-management" element={<ClassManagement />} />
          <Route path="/exam-results" element={<ExamResults />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/department-management" element={<DepartmentManagement />} />
          <Route path="/roles-permissions" element={<RolesPermissions />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


