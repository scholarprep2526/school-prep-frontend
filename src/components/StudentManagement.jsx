import React, { useState } from 'react';
import Layout from './Layout';

const StudentManagement = () => {
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    exam: '',
    performance: '',
    search: ''
  });

  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    {
      id: 'STU2025001',
      name: 'Ramesh Kumar',
      avatar: 'https://i.pravatar.cc/48?img=1',
      class: '11 (PUC I)',
      section: 'A',
      exam: 'NEET Preparation',
      rank: 5,
      accuracy: 82,
      accuracyChange: 5.2,
      speed: 1.2,
      speedChange: 0.3,
      consistency: 74,
      consistencyChange: -2.1
    },
    {
      id: 'STU2025002',
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/48?img=2',
      class: '12 (PUC II)',
      section: 'B',
      exam: 'JEE Preparation',
      rank: 12,
      accuracy: 76,
      accuracyChange: 3.8,
      speed: 0.9,
      speedChange: 0.2,
      consistency: 82,
      consistencyChange: 4.5
    },
    {
      id: 'STU2025003',
      name: 'Arjun Patel',
      avatar: 'https://i.pravatar.cc/48?img=3',
      class: '10',
      section: 'C',
      exam: 'Board Preparation',
      rank: 8,
      accuracy: 91,
      accuracyChange: 2.7,
      speed: 1.1,
      speedChange: -0.1,
      consistency: 88,
      consistencyChange: 3.2
    },
    {
      id: 'STU2025004',
      name: 'Sneha Gupta',
      avatar: 'https://i.pravatar.cc/48?img=4',
      class: '12 (PUC II)',
      section: 'A',
      exam: 'NEET Preparation',
      rank: 3,
      accuracy: 89,
      accuracyChange: 1.8,
      speed: 1.4,
      speedChange: 0.4,
      consistency: 91,
      consistencyChange: 2.3
    }
  ];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilters({
      class: '',
      section: '',
      exam: '',
      performance: '',
      search: ''
    });
  };

  const applyFilters = () => {
    console.log('Applying filters:', filters);
  };

  return (
    <Layout title="Student Management" breadcrumbs={[{ text: "Student Management" }]}>
      <div className="flex flex-col gap-4">
        {/* Filters Section */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="classFilter" className="mb-2 font-medium text-sm text-gray-700">
                Class
              </label>
              <select
                id="classFilter"
                value={filters.class}
                onChange={(e) => handleFilterChange('class', e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              >
                <option value="">All Classes</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11 (PUC I)</option>
                <option value="12">Class 12 (PUC II)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="sectionFilter" className="mb-2 font-medium text-sm text-gray-700">
                Section
              </label>
              <select
                id="sectionFilter"
                value={filters.section}
                onChange={(e) => handleFilterChange('section', e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              >
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="examFilter" className="mb-2 font-medium text-sm text-gray-700">
                Exam Preparation
              </label>
              <select
                id="examFilter"
                value={filters.exam}
                onChange={(e) => handleFilterChange('exam', e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              >
                <option value="">All Exams</option>
                <option value="neet">NEET</option>
                <option value="jee">JEE</option>
                <option value="kcet">KCET</option>
                <option value="board">Board Exams</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="performanceFilter" className="mb-2 font-medium text-sm text-gray-700">
                Performance Level
              </label>
              <select
                id="performanceFilter"
                value={filters.performance}
                onChange={(e) => handleFilterChange('performance', e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              >
                <option value="">All Levels</option>
                <option value="excellent">Excellent (90%+)</option>
                <option value="good">Good (75-89%)</option>
                <option value="average">Average (50-74%)</option>
                <option value="poor">Needs Improvement (&lt;50%)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="searchFilter" className="mb-2 font-medium text-sm text-gray-700">
                Search by Name/ID
              </label>
              <input
                type="text"
                id="searchFilter"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                placeholder="Enter student name or ID"
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              />
            </div>

            <div className="flex items-end gap-3">
              <button
                onClick={applyFilters}
                className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md inline-flex items-center gap-2"
              >
                <i className="fas fa-filter"></i>
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="px-5 py-2 bg-transparent text-primary border border-primary rounded-lg text-sm font-medium transition-all hover:bg-primary-100 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fas fa-sync-alt"></i>
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Student List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Students</h3>
              <div className="text-sm text-gray-500">Showing 24 of 187 students</div>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-transparent text-primary border border-primary rounded-lg text-sm font-medium transition-all hover:bg-primary-100 hover:-translate-y-0.5 inline-flex items-center gap-2">
                <i className="fas fa-file-export"></i>
                Export
              </button>
              <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md inline-flex items-center gap-2">
                <i className="fas fa-plus"></i>
                Add Student
              </button>
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {students.map((student) => (
              <li
                key={student.id}
                className="px-6 py-4 transition-all hover:bg-primary-50 cursor-pointer flex items-center gap-6 flex-wrap lg:flex-nowrap"
              >
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{student.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                      {student.id}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
                    <div className="flex items-center gap-1">
                      <i className="fas fa-graduation-cap text-xs text-gray-400"></i>
                      Class {student.class} - Section {student.section}
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-bullseye text-xs text-gray-400"></i>
                      {student.exam}
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-star text-xs text-gray-400"></i>
                      Rank: {student.rank}
                    </div>
                  </div>

                  {/* Performance Indicator Bar */}
                  <div className="mt-2 h-1.5 rounded-full bg-gray-200 overflow-hidden relative">
                    <div
                      className="h-full bg-success absolute left-0 top-0"
                      style={{ width: `${student.accuracy}%` }}
                    ></div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="flex gap-6 min-w-fit">
                  <div className="text-center min-w-20">
                    <div className="text-lg font-bold text-gray-900">{student.accuracy}%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</div>
                    <div className={`text-xs flex items-center justify-center gap-1 mt-1 ${student.accuracyChange > 0 ? 'text-success' : 'text-danger'}`}>
                      <i className={`fas fa-arrow-${student.accuracyChange > 0 ? 'up' : 'down'}`}></i>
                      {Math.abs(student.accuracyChange)}%
                    </div>
                  </div>

                  <div className="text-center min-w-20">
                    <div className="text-lg font-bold text-gray-900">{student.speed}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Q/Min</div>
                    <div className={`text-xs flex items-center justify-center gap-1 mt-1 ${student.speedChange > 0 ? 'text-success' : 'text-danger'}`}>
                      <i className={`fas fa-arrow-${student.speedChange > 0 ? 'up' : 'down'}`}></i>
                      {Math.abs(student.speedChange)}
                    </div>
                  </div>

                  <div className="text-center min-w-20">
                    <div className="text-lg font-bold text-gray-900">{student.consistency}%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Consistency</div>
                    <div className={`text-xs flex items-center justify-center gap-1 mt-1 ${student.consistencyChange > 0 ? 'text-success' : 'text-danger'}`}>
                      <i className={`fas fa-arrow-${student.consistencyChange > 0 ? 'up' : 'down'}`}></i>
                      {Math.abs(student.consistencyChange)}%
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-2 bg-transparent text-primary border border-primary rounded-lg text-sm transition-all hover:bg-primary-100"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
            <div className="text-sm text-gray-500">Showing 1-24 of 187 students</div>
            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 border border-gray-200 transition-all hover:bg-primary-100 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                    currentPage === page
                      ? 'bg-primary border-primary text-white'
                      : 'bg-gray-100 border-gray-200 hover:bg-primary-100 hover:border-primary hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 border border-gray-200 transition-all hover:bg-primary-100 hover:border-primary hover:text-primary">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentManagement;
