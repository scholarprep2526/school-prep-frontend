import React, { useState } from 'react';
import Layout from './Layout';

const ExamResults = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState({
    class: 'all',
    section: 'all',
    type: 'all',
    subject: 'all'
  });

  const examsData = [
    {
      id: 1,
      name: 'Physics Unit Test 1',
      class: '11th-PCM',
      section: 'Section A',
      type: 'Unit Test',
      badgeStyle: 'bg-info-light text-info',
      date: '2023-10-15',
      duration: '1h 30m',
      questions: 25,
      marks: 100,
      students: 45,
      accuracy: 82,
      avgScore: 78.5,
      avgPercentage: 78.5,
      subjects: [{ name: 'Physics', icon: 'fa-atom', color: 'text-accent' }]
    },
    {
      id: 2,
      name: 'Chemistry Mid-Term',
      class: '11th-PCB',
      section: 'Section B',
      type: 'Mid-Term',
      badgeStyle: 'bg-warning-light text-warning',
      date: '2023-11-05',
      duration: '2h',
      questions: 40,
      marks: 150,
      students: 38,
      accuracy: 75,
      avgScore: 112.5,
      avgPercentage: 75,
      subjects: [{ name: 'Chemistry', icon: 'fa-flask', color: 'text-primary' }]
    },
    {
      id: 3,
      name: 'Mathematics Final',
      class: '12th-PCM',
      section: 'Section C',
      type: 'Final Exam',
      badgeStyle: 'bg-success-light text-success',
      date: '2023-12-20',
      duration: '3h',
      questions: 50,
      marks: 200,
      students: 52,
      accuracy: 68,
      avgScore: 136,
      avgPercentage: 68,
      subjects: [{ name: 'Math', icon: 'fa-calculator', color: 'text-warning' }]
    },
    {
      id: 4,
      name: 'Physics & Math Unit Test',
      class: '11th-PCM',
      section: 'Section A',
      type: 'Unit Test',
      badgeStyle: 'bg-info-light text-info',
      date: '2023-11-22',
      duration: '1h 30m',
      questions: 30,
      marks: 120,
      students: 47,
      accuracy: 85,
      avgScore: 102,
      avgPercentage: 85,
      subjects: [
        { name: 'Physics', icon: 'fa-atom', color: 'text-accent' },
        { name: 'Math', icon: 'fa-calculator', color: 'text-warning' }
      ]
    },
    {
      id: 5,
      name: 'Chemistry & Biology Final',
      class: '12th-PCB',
      section: 'Section D',
      type: 'Final Exam',
      badgeStyle: 'bg-success-light text-success',
      date: '2023-12-15',
      duration: '2h 30m',
      questions: 60,
      marks: 240,
      students: 42,
      accuracy: 72,
      avgScore: 172.8,
      avgPercentage: 72,
      subjects: [
        { name: 'Chemistry', icon: 'fa-flask', color: 'text-primary' },
        { name: 'Biology', icon: 'fa-dna', color: 'text-success' }
      ]
    }
  ];

  const archivedExams = [
    {
      id: 6,
      name: 'Physics Unit Test 1 (2022)',
      class: '11th-PCM',
      section: 'Section A',
      type: 'Archived',
      badgeStyle: 'bg-danger-light text-danger',
      date: '2022-10-15',
      duration: '1h 30m',
      questions: 25,
      marks: 100,
      students: 42,
      accuracy: 78,
      avgScore: 75,
      avgPercentage: 75,
      subjects: [{ name: 'Physics', icon: 'fa-atom', color: 'text-accent' }]
    }
  ];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const currentExams = activeTab === 'overview' ? examsData : archivedExams;

  return (
    <Layout title="Exam Results" breadcrumbs={[{ text: "Exam Results" }]}>
      <div className="flex flex-col gap-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary to-blue-500 text-white p-6 rounded-xl flex justify-between items-center shadow-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Exam Results</h2>
            <p className="opacity-90">Comprehensive analysis of all examination results and performance metrics</p>
          </div>
          <i className="fas fa-clipboard-list text-5xl opacity-20"></i>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-all border-b-2 ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('archived')}
            className={`px-6 py-3 font-medium transition-all border-b-2 ${
              activeTab === 'archived'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Archived
          </button>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="classFilter" className="text-sm font-medium text-gray-600">
              Class
            </label>
            <select
              id="classFilter"
              value={filters.class}
              onChange={(e) => handleFilterChange('class', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
            >
              <option value="all">All Classes</option>
              <option value="11-pcm">11th-PCM</option>
              <option value="11-pcb">11th-PCB</option>
              <option value="12-pcm">12th-PCM</option>
              <option value="12-pcb">12th-PCB</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sectionFilter" className="text-sm font-medium text-gray-600">
              Section
            </label>
            <select
              id="sectionFilter"
              value={filters.section}
              onChange={(e) => handleFilterChange('section', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
            >
              <option value="all">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              <option value="D">Section D</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="typeFilter" className="text-sm font-medium text-gray-600">
              Exam Type
            </label>
            <select
              id="typeFilter"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
            >
              <option value="all">All Types</option>
              <option value="unit">Unit Test</option>
              <option value="midterm">Mid-Term</option>
              <option value="final">Final Exam</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Subjects</label>
            <div className="flex flex-wrap gap-2">
              {['all', 'physics', 'math', 'biology', 'chemistry'].map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleFilterChange('subject', subject)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filters.subject === subject
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-primary-100 hover:text-primary hover:border-primary-100'
                  }`}
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <i className={`fas ${activeTab === 'overview' ? 'fa-list-alt' : 'fa-archive'} text-primary`}></i>
              <span>{activeTab === 'overview' ? 'Active Exams' : 'Archived Exams'}</span>
            </h2>
            <div className="flex gap-3">
              <a href="#" className="text-sm text-primary hover:text-accent font-medium hover:underline">
                Export Data
              </a>
              <a href="#" className="text-sm text-primary hover:text-accent font-medium hover:underline">
                View All
              </a>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide sticky left-0 bg-gray-50">
                    Exam Details
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Questions
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Marks
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Students
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Accuracy
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Avg. Score
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    % Avg.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Subject(s)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentExams.map((exam) => (
                  <tr
                    key={exam.id}
                    className={`transition-all hover:bg-primary-50 ${
                      activeTab === 'archived' ? 'opacity-70' : ''
                    }`}
                  >
                    <td className="px-4 py-4 sticky left-0 bg-white">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-gray-900">{exam.name}</span>
                        <span className="text-xs text-gray-500">
                          {exam.class} • {exam.section}
                        </span>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-lg text-xs font-medium w-fit ${exam.badgeStyle}`}
                        >
                          {exam.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{exam.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.duration}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.questions}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.marks}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.students}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${exam.accuracy}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{exam.accuracy}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.avgScore}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {exam.avgPercentage}%
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {exam.subjects.map((subject, idx) => (
                          <div
                            key={idx}
                            className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ${subject.color}`}
                            title={subject.name}
                          >
                            <i className={`fas ${subject.icon} text-xs`}></i>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 border border-gray-200 bg-primary text-white rounded-lg transition-all hover:bg-primary/90">
              1
            </button>
            <button className="px-4 py-2 border border-gray-200 bg-white rounded-lg transition-all hover:bg-primary-100 hover:text-primary hover:border-primary-100">
              2
            </button>
            <button className="px-4 py-2 border border-gray-200 bg-white rounded-lg transition-all hover:bg-primary-100 hover:text-primary hover:border-primary-100">
              3
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExamResults;
