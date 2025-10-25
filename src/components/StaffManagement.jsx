import React, { useState } from 'react';
import Layout from './Layout';

const StaffManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const staffData = [
    {
      id: 1,
      name: 'Priya Sharma',
      initials: 'PS',
      email: 'priya.sharma@scholarprep.edu',
      phone: '+91-98765 43210',
      role: 'Physics Teacher',
      department: 'Physics',
      status: 'active',
      subjects: 'Physics, Advanced Physics',
      classes: '11A, 12B'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      initials: 'RP',
      email: 'rahul.patel@scholarprep.edu',
      phone: '+91-87654 32109',
      role: 'Math Teacher',
      department: 'Mathematics',
      status: 'active',
      subjects: 'Math, Calculus',
      classes: '10A, 11A'
    },
    {
      id: 3,
      name: 'Anjali Desai',
      initials: 'AD',
      email: 'anjali.desai@scholarprep.edu',
      phone: '+91-76543 21098',
      role: 'Administrator',
      department: 'Administration',
      status: 'active',
      subjects: '-',
      classes: '-'
    },
    {
      id: 4,
      name: 'Sanjay Verma',
      initials: 'SV',
      email: 'sanjay.verma@scholarprep.edu',
      phone: '+91-98765 43212',
      role: 'Chemistry Teacher',
      department: 'Chemistry',
      status: 'on-leave',
      subjects: 'Chemistry, Organic Chemistry',
      classes: '11B, 12A'
    }
  ];

  const departments = [
    { name: 'Physics', staff: 3 },
    { name: 'Mathematics', staff: 4 },
    { name: 'Chemistry', staff: 3 },
    { name: 'Biology', staff: 2 },
    { name: 'Administration', staff: 5 }
  ];

  const filteredStaff = staffData.filter(staff => {
    if (statusFilter !== 'all' && staff.status !== statusFilter) return false;
    if (activeTab === 'teaching' && staff.department === 'Administration') return false;
    if (activeTab === 'non-teaching' && staff.department !== 'Administration') return false;
    return true;
  });

  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-success-light text-success',
      inactive: 'bg-danger-light text-danger',
      'on-leave': 'bg-warning-light text-warning'
    };
    const labels = {
      active: 'Active',
      inactive: 'Inactive',
      'on-leave': 'On Leave'
    };
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <Layout title="Staff Management" breadcrumbs={[{ text: "Staff Management" }]}>
      <div className="flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            All Staff
          </button>
          <button
            onClick={() => setActiveTab('teaching')}
            className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === 'teaching'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            Teaching Staff
          </button>
          <button
            onClick={() => setActiveTab('non-teaching')}
            className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === 'non-teaching'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            Non-Teaching
          </button>
          <button
            onClick={() => setActiveTab('departments')}
            className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === 'departments'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            Departments
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === 'add'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            Add Staff
          </button>
        </div>

        {/* All Staff, Teaching, and Non-Teaching Tabs */}
        {(activeTab === 'all' || activeTab === 'teaching' || activeTab === 'non-teaching') && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Filter Buttons */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'active'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('on-leave')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'on-leave'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                On Leave
              </button>
              <button
                onClick={() => setStatusFilter('inactive')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'inactive'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Inactive
              </button>
            </div>

            {/* Staff Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Staff Member
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Contact
                    </th>
                    {activeTab === 'teaching' ? (
                      <>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Subjects
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Classes
                        </th>
                      </>
                    ) : (
                      <>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Role
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Department
                        </th>
                      </>
                    )}
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStaff.map((staff) => (
                    <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary-100 text-primary flex items-center justify-center font-bold text-sm">
                            {staff.initials}
                          </div>
                          <span className="font-medium text-gray-900">{staff.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm">
                          <div className="text-gray-900">{staff.email}</div>
                          <div className="text-gray-500">{staff.phone}</div>
                        </div>
                      </td>
                      {activeTab === 'teaching' ? (
                        <>
                          <td className="px-4 py-4 text-sm text-gray-900">{staff.subjects}</td>
                          <td className="px-4 py-4 text-sm text-gray-900">{staff.classes}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-4 text-sm text-gray-900">{staff.role}</td>
                          <td className="px-4 py-4 text-sm text-gray-900">{staff.department}</td>
                        </>
                      )}
                      <td className="px-4 py-4">{getStatusBadge(staff.status)}</td>
                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-all">
                            View
                          </button>
                          <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === 'departments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary flex items-center justify-center mr-4">
                    <i className="fas fa-building text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{dept.name}</h4>
                    <p className="text-sm text-gray-500">{dept.staff} staff members</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button className="text-primary text-sm font-medium hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Staff Tab */}
        {activeTab === 'add' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Add New Staff Member</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                  placeholder="Enter role"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10">
                  <option>Select department</option>
                  <option>Physics</option>
                  <option>Mathematics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Administration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Leave</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all">
                Add Staff Member
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StaffManagement;
