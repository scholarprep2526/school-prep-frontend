import React, { useState } from 'react';
import Layout from './Layout';

const AdminMockExams = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [examType, setExamType] = useState('standard');
  const [examForm, setExamForm] = useState({
    examMode: '',
    examCategory: '',
    examName: '',
    examDescription: '',
    totalQuestions: '',
    totalMarks: '',
    duration: '',
    positiveMarks: '',
    negativeMarks: '',
    passingMarks: '',
    startTime: '',
    endTime: '',
    classes: [],
    subjects: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const values = Array.from(selectedOptions, option => option.value);
      setExamForm(prev => ({ ...prev, [name]: values }));
    } else {
      setExamForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const examTypes = [
    { id: 'standard', title: 'Standard Exam', desc: 'Create a new exam from scratch', icon: 'fa-file-alt' },
    { id: 'previous', title: 'Previous Year Paper', desc: 'Based on past exam patterns', icon: 'fa-calendar-alt' },
    { id: 'model', title: 'Model Exam', desc: 'Practice for upcoming exams', icon: 'fa-copy' },
    { id: 'published', title: 'Clone Published', desc: 'Duplicate an existing exam', icon: 'fa-clone' }
  ];

  const draftExams = [
    {
      title: 'PUC II GROUP-1 AIIMS-2, FTB-2, S60-2 CT-01',
      created: '08 July 2025 - 04:35 PM',
      author: 'PrebluJing Kadode',
      questions: 90,
      duration: '1h 30m',
      marks: 360,
      subjects: 'Physics, Chemistry, Biology',
      status: 'draft'
    },
    {
      title: 'NEET 2025 Practice Test - Physics Focus',
      created: '10 July 2025 - 10:15 AM',
      author: 'Admin User',
      questions: 45,
      duration: '1h 00m',
      marks: 180,
      subjects: 'Physics',
      status: 'draft'
    }
  ];

  const publishedExams = [
    {
      title: 'PUC II GROUP-1 AIIMS-1, FTB-1, S60-1 CT-01',
      created: '08 July 2025 - 04:34 PM',
      author: 'PrebluJing Kadode',
      enrolled: 124,
      questions: 180,
      duration: '3h 00m',
      marks: 720,
      topics: 'Living world, bio classification, plant kingdom & cell the unit of life',
      status: 'published'
    }
  ];

  const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exam form submitted:', examForm);
    alert('Exam saved successfully!');
  };

  return (
    <Layout title="Manage Exams" breadcrumbs={[{ text: "Exams" }, { text: "Manage Exams" }]}> 
      <div className="space-y-6">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="flex border-b">
            {[
              { id: 'new', label: 'Create New Exam', icon: 'fa-plus-circle' },
              { id: 'unpublished', label: 'Drafts & Unpublished', icon: 'fa-edit' },
              { id: 'published', label: 'Published Exams', icon: 'fa-check-circle' },
              { id: 'archived', label: 'Archived', icon: 'fa-archive' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-primary border-b-2 border-primary bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <i className={`fas ${tab.icon}`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* New Exam Form */}
        {activeTab === 'new' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <i className="fas fa-plus-circle text-primary"></i>
                Create New Exam
              </h2>
              <p className="text-gray-600">Configure all exam details before publishing</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Exam Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Exam Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {examTypes.map(type => (
                    <div
                      key={type.id}
                      onClick={() => setExamType(type.id)}
                      className={`cursor-pointer p-4 rounded-lg border text-center transition-all ${
                        examType === type.id
                          ? 'border-primary bg-primary-50 shadow-sm'
                          : 'border-gray-200 hover:border-primary hover:shadow-sm'
                      }`}
                    >
                      <div className="text-primary text-2xl mb-2">
                        <i className={`fas ${type.icon}`}></i>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">{type.title}</div>
                      <div className="text-sm text-gray-600">{type.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exam Mode *</label>
                  <select
                    name="examMode"
                    value={examForm.examMode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Exam Mode</option>
                    <option value="online">Online Exam</option>
                    <option value="offline">Offline (OMR/Paper)</option>
                    <option value="hybrid">Hybrid (Both)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exam Category *</label>
                  <select
                    name="examCategory"
                    value={examForm.examCategory}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="practice">Practice Test</option>
                    <option value="mock">Mock Exam</option>
                    <option value="term">Term Exam</option>
                    <option value="final">Final Assessment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exam Name *</label>
                <input
                  type="text"
                  name="examName"
                  value={examForm.examName}
                  onChange={handleInputChange}
                  placeholder="e.g. PUC II GROUP-1 AIIMS-2"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exam Description *</label>
                <textarea
                  name="examDescription"
                  value={examForm.examDescription}
                  onChange={handleInputChange}
                  placeholder="Provide details about the exam such as syllabus coverage, important topics, and any special instructions..."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Exam Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Questions *</label>
                  <input
                    type="number"
                    name="totalQuestions"
                    value={examForm.totalQuestions}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Marks *</label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={examForm.totalMarks}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes) *</label>
                  <input
                    type="number"
                    name="duration"
                    value={examForm.duration}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Marking Scheme */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Positive Marks per Question</label>
                  <input
                    type="number"
                    name="positiveMarks"
                    value={examForm.positiveMarks}
                    onChange={handleInputChange}
                    step="0.25"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Negative Marks per Question</label>
                  <input
                    type="number"
                    name="negativeMarks"
                    value={examForm.negativeMarks}
                    onChange={handleInputChange}
                    step="0.25"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passing Marks</label>
                  <input
                    type="number"
                    name="passingMarks"
                    value={examForm.passingMarks}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Time *</label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    value={examForm.startTime}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Time *</label>
                  <input
                    type="datetime-local"
                    name="endTime"
                    value={examForm.endTime}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Target Classes and Subjects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Applicable Classes *</label>
                  <select
                    name="classes"
                    multiple
                    value={examForm.classes}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-24"
                    required
                  >
                    <option value="puc1">PUC I Year</option>
                    <option value="puc2">PUC II Year</option>
                    <option value="jee">JEE Advanced</option>
                    <option value="neet">NEET</option>
                    <option value="cbse10">CBSE Class 10</option>
                    <option value="cbse12">CBSE Class 12</option>
                  </select>
                  <small className="text-gray-500">Hold Ctrl/Cmd to select multiple classes</small>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjects Covered</label>
                  <select
                    name="subjects"
                    multiple
                    value={examForm.subjects}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-24"
                  >
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="math">Mathematics</option>
                    <option value="biology">Biology</option>
                    <option value="english">English</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 pt-6 border-t">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
                >
                  <i className="fas fa-save"></i>
                  Save as Draft
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-600 flex items-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i>
                  Publish Exam
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Unpublished Exams */}
        {activeTab === 'unpublished' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <i className="fas fa-edit text-primary"></i>
                Drafts & Unpublished Exams
              </h2>
              <p className="text-gray-600">Exams awaiting finalization and publication</p>
            </div>

            {/* Subject Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSubject === subject
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Exam List */}
            <div className="space-y-4">
              {draftExams.map((exam, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-file-alt text-primary text-lg mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                        <div className="text-sm text-gray-600 mt-1 space-x-4">
                          <span><i className="far fa-calendar mr-1"></i>Created: {exam.created}</span>
                          <span><i className="far fa-user mr-1"></i>By: {exam.author}</span>
                        </div>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      <i className="fas fa-pencil-alt mr-1"></i>
                      Draft
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-sm">
                      <i className="fas fa-question-circle text-gray-400 mr-2"></i>
                      <strong>Questions:</strong> {exam.questions}
                    </div>
                    <div className="text-sm">
                      <i className="far fa-clock text-gray-400 mr-2"></i>
                      <strong>Duration:</strong> {exam.duration}
                    </div>
                    <div className="text-sm">
                      <i className="fas fa-star text-gray-400 mr-2"></i>
                      <strong>Marks:</strong> {exam.marks}
                    </div>
                    <div className="text-sm">
                      <i className="fas fa-book text-gray-400 mr-2"></i>
                      <strong>Subjects:</strong> {exam.subjects}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-600 text-sm flex items-center gap-1">
                      <i className="fas fa-edit"></i>
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-600 text-sm flex items-center gap-1">
                      <i className="fas fa-paper-plane"></i>
                      Publish
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm flex items-center gap-1">
                      <i className="fas fa-eye"></i>
                      Preview
                    </button>
                    <button className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 text-sm flex items-center gap-1">
                      <i className="fas fa-trash-alt"></i>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Published Exams */}
        {activeTab === 'published' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <i className="fas fa-check-circle text-green-600"></i>
                Published Exams
              </h2>
              <p className="text-gray-600">Active exams available to students</p>
            </div>

            {/* Subject Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSubject === subject
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Exam List */}
            <div className="space-y-4">
              {publishedExams.map((exam, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-file-alt text-primary text-lg mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                        <div className="text-sm text-gray-600 mt-1 space-x-4">
                          <span><i className="far fa-calendar mr-1"></i>Created: {exam.created}</span>
                          <span><i className="far fa-user mr-1"></i>By: {exam.author}</span>
                          <span><i className="fas fa-users mr-1"></i>Enrolled: {exam.enrolled} students</span>
                        </div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <i className="fas fa-check mr-1"></i>
                      Published
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="text-sm">
                      <i className="fas fa-question-circle text-gray-400 mr-2"></i>
                      <strong>Questions:</strong> {exam.questions}
                    </div>
                    <div className="text-sm">
                      <i className="far fa-clock text-gray-400 mr-2"></i>
                      <strong>Duration:</strong> {exam.duration}
                    </div>
                    <div className="text-sm">
                      <i className="fas fa-star text-gray-400 mr-2"></i>
                      <strong>Marks:</strong> {exam.marks}
                    </div>
                    <div className="text-sm col-span-full">
                      <i className="fas fa-book text-gray-400 mr-2"></i>
                      <strong>Topics:</strong> {exam.topics}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-600 text-sm flex items-center gap-1">
                      <i className="fas fa-edit"></i>
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-success text-white rounded hover:bg-success-600 text-sm flex items-center gap-1">
                      <i className="fas fa-chart-bar"></i>
                      View Results
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm flex items-center gap-1">
                      <i className="fas fa-download"></i>
                      Export
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm flex items-center gap-1">
                      <i className="fas fa-archive"></i>
                      Archive
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Archived Tab */}
        {activeTab === 'archived' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-center py-12">
              <i className="fas fa-archive text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Archived Exams</h3>
              <p className="text-gray-600">Archived exams will appear here</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminMockExams;


