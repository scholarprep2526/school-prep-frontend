import React, { useState } from 'react';
import Layout from './Layout';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Physics', head: 'Dr. Priya Sharma', staff: 8, description: 'Covers all physics subjects including mechanics, thermodynamics, and quantum physics' },
    { id: 2, name: 'Mathematics', head: 'Prof. Rahul Patel', staff: 10, description: 'Mathematics department covering algebra, calculus, geometry, and statistics' },
    { id: 3, name: 'Chemistry', head: 'Dr. Sanjay Verma', staff: 7, description: 'Chemistry department including organic, inorganic, and physical chemistry' },
    { id: 4, name: 'Biology', head: 'Dr. Anjali Desai', staff: 6, description: 'Biology department covering botany, zoology, and microbiology' },
    { id: 5, name: 'Computer Science', head: 'Mr. Arjun Mehta', staff: 5, description: 'Computer science and programming courses' },
    { id: 6, name: 'English', head: 'Ms. Neha Gupta', staff: 4, description: 'English language and literature department' },
    { id: 7, name: 'Administration', head: 'Mrs. Kavita Singh', staff: 12, description: 'Administrative staff and support services' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [formData, setFormData] = useState({ name: '', head: '', staff: '', description: '' });

  const handleEdit = (dept) => {
    setEditingDept(dept);
    setFormData(dept);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      setDepartments(departments.filter(dept => dept.id !== id));
    }
  };

  const handleSave = () => {
    if (editingDept) {
      setDepartments(departments.map(dept =>
        dept.id === editingDept.id ? { ...formData, id: dept.id } : dept
      ));
    } else {
      setDepartments([...departments, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingDept(null);
    setFormData({ name: '', head: '', staff: '', description: '' });
  };

  const openAddModal = () => {
    setEditingDept(null);
    setFormData({ name: '', head: '', staff: '', description: '' });
    setShowModal(true);
  };

  return (
    <Layout title="Department Management" breadcrumbs={[{ text: "Department Management" }]}>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <i className="fas fa-building text-primary"></i>
            Departments
          </h2>
          <button
            onClick={openAddModal}
            className="px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Add Department
          </button>
        </div>

        {/* Departments Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Department Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Head of Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Staff Count
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-primary-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{dept.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{dept.head}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{dept.staff} members</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                    {dept.description}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(dept)}
                        className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-1"
                      >
                        <i className="fas fa-edit"></i>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(dept.id)}
                        className="px-3 py-1.5 text-sm bg-danger text-white rounded-lg hover:bg-danger/90 transition-all inline-flex items-center gap-1"
                      >
                        <i className="fas fa-trash"></i>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingDept ? 'Edit Department' : 'Add New Department'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter department name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Head of Department
                </label>
                <input
                  type="text"
                  value={formData.head}
                  onChange={(e) => setFormData({ ...formData, head: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter head of department"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Count
                </label>
                <input
                  type="number"
                  value={formData.staff}
                  onChange={(e) => setFormData({ ...formData, staff: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter staff count"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 min-h-24 resize-vertical"
                  placeholder="Enter department description"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                {editingDept ? 'Save Changes' : 'Add Department'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DepartmentManagement;
