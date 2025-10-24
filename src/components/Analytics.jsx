import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const Analytics = () => {
  const [filters, setFilters] = useState({
    class: 'All Classes',
    section: 'All Sections', 
    subject: 'All Subjects',
    period: 'Last 30 Days'
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    console.log('Applying filters:', filters);
    // In real app, this would trigger data refresh
  };

  const metrics = [
    {
      title: 'Avg. Test Score',
      value: '76.4%',
      change: '+2.3% from last month',
      positive: true,
      icon: 'fa-chart-line'
    },
    {
      title: 'At-Risk Students', 
      value: '12',
      change: '+3 from last month',
      positive: false,
      icon: 'fa-exclamation-triangle'
    },
    {
      title: 'Practice Test Completion',
      value: '68%', 
      change: '+5% from last month',
      positive: true,
      icon: 'fa-tasks'
    },
    {
      title: 'Teacher Effectiveness',
      value: '82/100',
      change: '+4 points from last quarter', 
      positive: true,
      icon: 'fa-chalkboard-teacher'
    }
  ];

  const atRiskStudents = [
    { name: 'Rahul Sharma (12-A)', issue: '3 consecutive tests below 40%' },
    { name: 'Priya Patel (12-B)', issue: 'Completed only 20% of practice tests' },
    { name: 'Amit Kumar (11-A)', issue: 'Score decline of 25% last quarter' },
    { name: 'Neha Gupta (11-B)', issue: 'Attendance below 60% with low scores' }
  ];

  const recommendations = [
    { topic: 'Organic Chemistry', issue: 'Lowest avg. scores (58%) across all classes' },
    { topic: 'Modern Physics', issue: 'Conceptual gaps in quantum mechanics topics' },
    { topic: 'Calculus Integration', issue: 'Need more practice problems and tutorials' }
  ];

  return (
    <Layout title="Analytics" breadcrumbs={[{ text: "Analytics" }]}>
      <div className="space-y-6">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
              <select
                value={filters.class}
                onChange={(e) => handleFilterChange('class', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option>All Classes</option>
                <option>Class 12</option>
                <option>Class 11</option>
              </select>
            </div>
            
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
              <select
                value={filters.section}
                onChange={(e) => handleFilterChange('section', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option>All Sections</option>
                <option>12-A</option>
                <option>12-B</option>
              </select>
            </div>
            
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                value={filters.subject}
                onChange={(e) => handleFilterChange('subject', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option>All Subjects</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Mathematics</option>
              </select>
            </div>
            
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
              <select
                value={filters.period}
                onChange={(e) => handleFilterChange('period', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Early Warning Alert */}
        <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fas fa-exclamation-triangle text-warning text-xl"></i>
            <div>
              <strong className="text-warning-800">Early Warning System:</strong>
              <span className="text-warning-700 ml-2">12 students identified as at-risk based on performance trends</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-warning text-white rounded hover:bg-warning-600 text-sm">
              View List
            </button>
            <button className="px-3 py-1 bg-warning text-white rounded hover:bg-warning-600 text-sm">
              Generate Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{metric.title}</span>
                <i className={`fas ${metric.icon} text-primary`}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className={`flex items-center text-sm ${
                metric.positive ? 'text-success' : 'text-danger'
              }`}>
                <i className={`fas fa-arrow-${metric.positive ? 'up' : 'up'} mr-1`}></i>
                <span>{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section Performance Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Section Performance</h3>
                <p className="text-sm text-gray-600">Average test scores across different sections</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Export
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-chart-bar text-4xl mb-2"></i>
                <p>Section Performance Chart</p>
                <p className="text-sm">Chart.js integration needed</p>
              </div>
            </div>
          </div>

          {/* Class-wide Test Analytics */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Class-wide Test Analytics</h3>
                <p className="text-sm text-gray-600">Performance trends over time</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Export
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-chart-line text-4xl mb-2"></i>
                <p>Performance Trends Chart</p>
                <p className="text-sm">Chart.js integration needed</p>
              </div>
            </div>
          </div>

          {/* Subject-wise Distribution */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Subject-wise Score Distribution</h3>
                <p className="text-sm text-gray-600">Performance across different subjects</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Export
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-chart-pie text-4xl mb-2"></i>
                <p>Subject Distribution Chart</p>
                <p className="text-sm">Chart.js integration needed</p>
              </div>
            </div>
          </div>

          {/* Teacher Effectiveness */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Teacher Effectiveness Analysis</h3>
                <p className="text-sm text-gray-600">Teaching effectiveness metrics</p>
              </div>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Export
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-chalkboard-teacher text-4xl mb-2"></i>
                <p>Teacher Analytics Chart</p>
                <p className="text-sm">Chart.js integration needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* At-Risk Students */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle text-danger"></i>
                At-Risk Students (Early Warning System)
              </h3>
              <p className="text-sm text-gray-600">Students identified as needing additional support</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-primary text-white rounded hover:bg-primary-600 text-sm">
                Assign Mentors
              </button>
              <button className="px-3 py-1 bg-info text-white rounded hover:bg-info-600 text-sm">
                Notify Counselors
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {atRiskStudents.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-danger-50 rounded-lg border border-danger-100">
                <div>
                  <div className="font-medium text-gray-900">{student.name}</div>
                  <div className="text-sm text-gray-600">{student.issue}</div>
                </div>
                <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Recommendations */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Curriculum Efficacy Recommendations</h3>
              <p className="text-sm text-gray-600">Areas for curriculum improvement based on performance data</p>
            </div>
            <button className="px-3 py-1 bg-primary text-white rounded hover:bg-primary-600 text-sm">
              View Details
            </button>
          </div>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-info-50 rounded-lg border border-info-100">
                <div>
                  <div className="font-medium text-gray-900">{rec.topic}</div>
                  <div className="text-sm text-gray-600">{rec.issue}</div>
                </div>
                <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Action Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;


