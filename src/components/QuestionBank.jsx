import React, { useState } from 'react';
import Layout from './Layout';

const QuestionBank = () => {
  const [activeTab, setActiveTab] = useState('view');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedImportMethod, setSelectedImportMethod] = useState('manual');
  const [tags, setTags] = useState(['Important', 'Board Exam']);
  const [tagInput, setTagInput] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleImportMethodChange = (method) => {
    setSelectedImportMethod(method);
  };

  const handleAddTag = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <Layout title="Question Bank" breadcrumbs={[{ text: "Questions" }, { text: "Question Bank" }]}>
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => handleTabChange('view')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'view'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          View Questions
        </button>
        <button
          onClick={() => handleTabChange('add')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'add'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          Add Questions
        </button>
        <button
          onClick={() => handleTabChange('papers')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'papers'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          Question Papers
        </button>
        <button
          onClick={() => handleTabChange('syllabus')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'syllabus'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          Syllabus
        </button>
        <button
          onClick={() => handleTabChange('stats')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'stats'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          Statistics
        </button>
      </div>

      {/* View Questions Tab */}
      {activeTab === 'view' && (
        <>
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <i className="fas fa-filter text-primary"></i>
                <span>Filter Questions</span>
              </h2>
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium"
              >
                <i className={`fas fa-chevron-${showAdvancedFilters ? 'up' : 'down'} mr-2`}></i>
                Advanced Filters
              </button>
            </div>

            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    placeholder="Search questions..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="">All Statuses</option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="review">In Review</option>
                  </select>
                </div>
              </div>

              {showAdvancedFilters && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                      <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">All Classes</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">All Subjects</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="maths">Mathematics</option>
                        <option value="biology">Biology</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                      <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">All Levels</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Question Type</label>
                      <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">All Types</option>
                        <option value="mcq">MCQ</option>
                        <option value="descriptive">Descriptive</option>
                        <option value="truefalse">True/False</option>
                        <option value="numerical">Numerical</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="Add tags separated by commas or press Enter"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(index)}
                            className="hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-4">
                <button type="button" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Apply Filters
                </button>
                <button type="button" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium">
                  Reset
                </button>
              </div>
            </form>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <i className="fas fa-book text-primary"></i>
                <span>Question Bank</span>
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-sm font-medium">
                  Export
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-medium">
                  Create Set
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Question Preview</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Subject</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Class</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">PHY-101</td>
                    <td className="py-3 px-4 text-sm">
                      A convex lens forms a real image of an object...{' '}
                      <span className="inline-block bg-primary-100 text-primary px-2 py-0.5 rounded-full text-xs ml-2">
                        Refraction
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">Physics</td>
                    <td className="py-3 px-4 text-sm">10</td>
                    <td className="py-3 px-4 text-sm">MCQ</td>
                    <td className="py-3 px-4">
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                        Published
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          View
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">CHEM-205</td>
                    <td className="py-3 px-4 text-sm">
                      Explain the process of fractional distillation...{' '}
                      <span className="inline-block bg-primary-100 text-primary px-2 py-0.5 rounded-full text-xs ml-2">
                        Organic
                      </span>
                      <span className="inline-block bg-primary-100 text-primary px-2 py-0.5 rounded-full text-xs ml-1">
                        Important
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">Chemistry</td>
                    <td className="py-3 px-4 text-sm">12</td>
                    <td className="py-3 px-4 text-sm">Descriptive</td>
                    <td className="py-3 px-4">
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        In Review
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          View
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">MATH-312</td>
                    <td className="py-3 px-4 text-sm">
                      Solve for x: 2x² - 5x + 3 = 0{' '}
                      <span className="inline-block bg-primary-100 text-primary px-2 py-0.5 rounded-full text-xs ml-2">
                        Quadratic
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">Mathematics</td>
                    <td className="py-3 px-4 text-sm">11</td>
                    <td className="py-3 px-4 text-sm">Numerical</td>
                    <td className="py-3 px-4">
                      <span className="inline-block bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
                        Draft
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          View
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">Showing 1-10 of 245 questions</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm">
                  Next
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Add Questions Tab */}
      {activeTab === 'add' && (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-plus-circle text-primary"></i>
              <span>Add New Questions</span>
            </h2>
            <p className="text-sm text-gray-500">Choose how you want to add questions</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div
              onClick={() => handleImportMethodChange('manual')}
              className={`p-6 text-center cursor-pointer rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-md ${
                selectedImportMethod === 'manual'
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <i className="fas fa-edit text-3xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">Manual Entry</h3>
              <p className="text-sm text-gray-500">Add questions one by one with full control</p>
            </div>

            <div
              onClick={() => handleImportMethodChange('bulk')}
              className={`p-6 text-center cursor-pointer rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-md ${
                selectedImportMethod === 'bulk'
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <i className="fas fa-file-import text-3xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">Bulk Import</h3>
              <p className="text-sm text-gray-500">Upload CSV/Excel files with multiple questions</p>
            </div>

            <div
              onClick={() => handleImportMethodChange('pdf')}
              className={`p-6 text-center cursor-pointer rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-md ${
                selectedImportMethod === 'pdf'
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <i className="fas fa-file-pdf text-3xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">PDF/Image</h3>
              <p className="text-sm text-gray-500">Upload PDFs or images and extract questions</p>
            </div>

            <div
              onClick={() => handleImportMethodChange('ai')}
              className={`p-6 text-center cursor-pointer rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-md ${
                selectedImportMethod === 'ai'
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <i className="fas fa-robot text-3xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">AI Generator</h3>
              <p className="text-sm text-gray-500">Generate questions automatically using AI</p>
            </div>
          </div>

          {/* Manual Entry Form */}
          {selectedImportMethod === 'manual' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
                <textarea
                  rows="3"
                  placeholder="Enter your question here..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Question Type</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="mcq">Multiple Choice (MCQ)</option>
                    <option value="descriptive">Descriptive</option>
                    <option value="truefalse">True/False</option>
                    <option value="numerical">Numerical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="maths">Mathematics</option>
                    <option value="biology">Biology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Save Question
                </button>
                <button type="button" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium">
                  Save as Draft
                </button>
              </div>
            </form>
          )}

          {/* Bulk Import Form */}
          {selectedImportMethod === 'bulk' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:border-primary hover:bg-primary-50 transition-all">
                <i className="fas fa-cloud-upload-alt text-5xl text-primary mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">Upload Your File</h3>
                <p className="text-gray-500 mb-4">Drag & drop your file here or click to browse</p>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                  Select File
                </button>
                <div className="flex gap-2 justify-center mt-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">CSV</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">Excel</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">XLSX</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Download Template</h4>
                <p className="text-sm text-gray-500 mb-3">Use our template to ensure proper formatting for bulk uploads.</p>
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-medium">
                    Download CSV Template
                  </button>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                    Download Excel Template
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PDF Upload Form */}
          {selectedImportMethod === 'pdf' && (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:border-primary hover:bg-primary-50 transition-all">
              <i className="fas fa-file-upload text-5xl text-primary mb-4"></i>
              <h3 className="text-lg font-semibold mb-2">Upload PDF or Images</h3>
              <p className="text-gray-500 mb-4">Drag & drop your files here or click to browse</p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                Select Files
              </button>
              <div className="flex gap-2 justify-center mt-4">
                <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">PDF</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">JPG</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border border-gray-200">PNG</span>
              </div>
            </div>
          )}

          {/* AI Generator Form */}
          {selectedImportMethod === 'ai' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <i className="fas fa-magic text-purple-600"></i>
                  <span>AI Question Generator</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Describe what kind of questions you need and our AI will generate them for you.
                </p>

                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="E.g.: '5 MCQ questions about Newton's Laws for Class 11 Physics'"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium">
                    Generate
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Questions</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500">
                      <option value="1">1</option>
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Question Type</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500">
                      <option value="mcq">MCQ</option>
                      <option value="descriptive">Descriptive</option>
                      <option value="truefalse">True/False</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Question Papers Tab */}
      {activeTab === 'papers' && (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-file-alt text-primary"></i>
              <span>Question Papers</span>
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                + Create New Paper
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium">
                Import Paper
              </button>
            </div>
          </div>

          <div className="text-center py-16 text-gray-500">
            <i className="fas fa-file-alt text-5xl mb-4 text-gray-300"></i>
            <p>Question papers management - Coming Soon</p>
          </div>
        </section>
      )}

      {/* Syllabus Tab */}
      {activeTab === 'syllabus' && (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-book-reader text-primary"></i>
              <span>Syllabus Management</span>
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                + Add Syllabus
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium">
                Import Syllabus
              </button>
            </div>
          </div>

          <div className="text-center py-16 text-gray-500">
            <i className="fas fa-book-reader text-5xl mb-4 text-gray-300"></i>
            <p>Syllabus management - Coming Soon</p>
          </div>
        </section>
      )}

      {/* Statistics Tab */}
      {activeTab === 'stats' && (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-chart-pie text-primary"></i>
              <span>Question Bank Statistics</span>
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">1,245</h3>
              <p className="text-sm text-blue-700">Total Questions</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">328</h3>
              <p className="text-sm text-green-700">Physics</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">297</h3>
              <p className="text-sm text-purple-700">Chemistry</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">412</h3>
              <p className="text-sm text-yellow-700">Mathematics</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">208</h3>
              <p className="text-sm text-red-700">Biology</p>
            </div>
          </div>

          <div className="text-center py-16 text-gray-500">
            <i className="fas fa-chart-bar text-5xl mb-4 text-gray-300"></i>
            <p>Detailed statistics and charts - Coming Soon</p>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default QuestionBank;
