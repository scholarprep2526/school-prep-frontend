import React, { useState } from 'react';
import Layout from './Layout';

const ClassManagement = () => {
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    teacher: '',
    search: ''
  });

  const [expandedClasses, setExpandedClasses] = useState([0]); // First class expanded by default

  const classesData = [
    {
      id: 1,
      name: 'Class 11 (PUC I)',
      sections: 2,
      students: 47,
      avgAccuracy: 78,
      sectionsData: [
        {
          name: 'Section A',
          students: 25,
          avgAccuracy: 82,
          teacher: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/32?img=5' },
          stats: { speed: 1.2, consistency: 74, topRank: 5 },
          performanceWidth: { accuracy: 82, speed: 65, consistency: 74 }
        },
        {
          name: 'Section B',
          students: 22,
          avgAccuracy: 74,
          teacher: { name: 'Rahul Patel', avatar: 'https://i.pravatar.cc/32?img=6' },
          stats: { speed: 1.0, consistency: 68, topRank: 12 },
          performanceWidth: { accuracy: 74, speed: 58, consistency: 68 }
        }
      ]
    },
    {
      id: 2,
      name: 'Class 12 (PUC II)',
      sections: 3,
      students: 85,
      avgAccuracy: 81,
      sectionsData: [
        {
          name: 'Section A',
          students: 30,
          avgAccuracy: 85,
          teacher: { name: 'Anjali Desai', avatar: 'https://i.pravatar.cc/32?img=7' },
          stats: { speed: 1.4, consistency: 82, topRank: 3 },
          performanceWidth: { accuracy: 85, speed: 72, consistency: 82 }
        },
        {
          name: 'Section B',
          students: 28,
          avgAccuracy: 80,
          teacher: { name: 'Sanjay Verma', avatar: 'https://i.pravatar.cc/32?img=8' },
          stats: { speed: 1.3, consistency: 78, topRank: 8 },
          performanceWidth: { accuracy: 80, speed: 68, consistency: 78 }
        },
        {
          name: 'Section C',
          students: 27,
          avgAccuracy: 78,
          teacher: { name: 'Neha Gupta', avatar: 'https://i.pravatar.cc/32?img=9' },
          stats: { speed: 1.1, consistency: 72, topRank: 15 },
          performanceWidth: { accuracy: 78, speed: 62, consistency: 72 }
        }
      ]
    },
    {
      id: 3,
      name: 'Class 10',
      sections: 1,
      students: 28,
      avgAccuracy: 76,
      sectionsData: [
        {
          name: 'Section A',
          students: 28,
          avgAccuracy: 76,
          teacher: { name: 'Arjun Mehta', avatar: 'https://i.pravatar.cc/32?img=10' },
          stats: { speed: 1.0, consistency: 70, topRank: 8 },
          performanceWidth: { accuracy: 76, speed: 60, consistency: 70 }
        }
      ]
    },
    {
      id: 4,
      name: 'Class 9',
      sections: 1,
      students: 25,
      avgAccuracy: 72,
      sectionsData: [
        {
          name: 'Section A',
          students: 25,
          avgAccuracy: 72,
          teacher: { name: 'Priyanka Reddy', avatar: 'https://i.pravatar.cc/32?img=11' },
          stats: { speed: 0.9, consistency: 65, topRank: 12 },
          performanceWidth: { accuracy: 72, speed: 55, consistency: 65 }
        }
      ]
    }
  ];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilters({ class: '', section: '', teacher: '', search: '' });
  };

  const toggleClass = (index) => {
    setExpandedClasses(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Layout title="Class Management" breadcrumbs={[{ text: "Class Management" }]}>
      <div className="flex flex-col gap-4">
        {/* Filters Section */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
              <label htmlFor="teacherFilter" className="mb-2 font-medium text-sm text-gray-700">
                Class Teacher
              </label>
              <select
                id="teacherFilter"
                value={filters.teacher}
                onChange={(e) => handleFilterChange('teacher', e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              >
                <option value="">All Teachers</option>
                <option value="Priya Sharma">Priya Sharma</option>
                <option value="Rahul Patel">Rahul Patel</option>
                <option value="Anjali Desai">Anjali Desai</option>
                <option value="Sanjay Verma">Sanjay Verma</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="searchFilter" className="mb-2 font-medium text-sm text-gray-700">
                Search by Name
              </label>
              <input
                type="text"
                id="searchFilter"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                placeholder="Enter class or section name"
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
              />
            </div>

            <div className="flex items-end gap-3">
              <button
                onClick={() => console.log('Filters applied:', filters)}
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

        {/* Class List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Classes & Sections</h3>
              <div className="text-sm text-gray-500">Showing 4 classes with 7 sections</div>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-transparent text-primary border border-primary rounded-lg text-sm font-medium transition-all hover:bg-primary-100 hover:-translate-y-0.5 inline-flex items-center gap-2">
                <i className="fas fa-file-export"></i>
                Export
              </button>
              <button className="px-5 py-2 bg-accent text-white rounded-lg text-sm font-medium transition-all hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-md inline-flex items-center gap-2">
                <i className="fas fa-plus"></i>
                Add Class
              </button>
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {classesData.map((classItem, index) => (
              <li key={classItem.id} className="border-b border-gray-200 last:border-b-0">
                {/* Class Header */}
                <div
                  onClick={() => toggleClass(index)}
                  className={`px-6 py-4 flex items-center justify-between cursor-pointer transition-all hover:bg-primary-50 ${
                    expandedClasses.includes(index) ? 'bg-primary-50' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-gray-900 mb-1">
                      <i
                        className={`fas fa-chevron-right text-gray-400 transition-transform ${
                          expandedClasses.includes(index) ? 'rotate-90 text-primary' : ''
                        }`}
                      ></i>
                      {classItem.name}
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>
                        <i className="fas fa-users text-xs text-gray-400 mr-1"></i>
                        {classItem.sections} sections
                      </span>
                      <span>
                        <i className="fas fa-user-graduate text-xs text-gray-400 mr-1"></i>
                        {classItem.students} students
                      </span>
                      <span>
                        <i className="fas fa-chart-line text-xs text-gray-400 mr-1"></i>
                        {classItem.avgAccuracy}% avg accuracy
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <button className="px-3 py-1.5 bg-transparent text-primary border border-primary rounded-lg text-xs font-medium transition-all hover:bg-primary-100 inline-flex items-center gap-1">
                      <i className="fas fa-plus"></i>
                      Add Section
                    </button>
                    <button className="px-3 py-1.5 bg-transparent text-primary border border-primary rounded-lg text-xs font-medium transition-all hover:bg-primary-100 inline-flex items-center gap-1">
                      <i className="fas fa-edit"></i>
                      Edit
                    </button>
                  </div>
                </div>

                {/* Sections Grid */}
                {expandedClasses.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {classItem.sectionsData.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-semibold text-primary">{section.name}</h4>
                              <div className="text-sm text-gray-600 mt-1">
                                <span className="inline-flex items-center gap-1">
                                  <i className="fas fa-user-graduate text-xs"></i>
                                  {section.students} students
                                </span>
                                <span className="inline-flex items-center gap-1 ml-3">
                                  <i className="fas fa-chart-line text-xs"></i>
                                  {section.avgAccuracy}% avg accuracy
                                </span>
                              </div>
                            </div>
                            <span className="px-2 py-1 bg-success-light text-success text-xs rounded-lg inline-flex items-center gap-1">
                              <i className="fas fa-check"></i>
                              Active
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm mb-4">
                            <img
                              src={section.teacher.avatar}
                              alt={section.teacher.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-gray-700">{section.teacher.name} (Class Teacher)</span>
                          </div>

                          <div className="flex gap-4 mb-4">
                            <div className="text-center flex-1">
                              <div className="text-lg font-bold text-gray-900">{section.stats.speed}</div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Q/Min</div>
                            </div>
                            <div className="text-center flex-1">
                              <div className="text-lg font-bold text-gray-900">{section.stats.consistency}%</div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Consistency</div>
                            </div>
                            <div className="text-center flex-1">
                              <div className="text-lg font-bold text-gray-900">{section.stats.topRank}</div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Top Rank</div>
                            </div>
                          </div>

                          <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden relative mb-4">
                            <div
                              className="h-full bg-success absolute left-0 top-0"
                              style={{ width: `${section.performanceWidth.accuracy}%` }}
                            ></div>
                          </div>

                          <button className="w-full px-3 py-2 bg-transparent text-primary border border-primary rounded-lg text-sm font-medium transition-all hover:bg-primary-100 inline-flex items-center justify-center gap-2">
                            <i className="fas fa-users"></i>
                            View Students
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ClassManagement;
