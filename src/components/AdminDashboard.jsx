import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const AdminDashboard = () => {

  return (
    <Layout title="Dashboard" breadcrumbs={[{ text: "Dashboard" }]}>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-500 text-white p-6 rounded-xl mb-6 flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Welcome back, Admin!</h2>
          <p className="opacity-90 text-base">Here's what's happening with your platform today.</p>
        </div>
        <i className="fas fa-chalkboard-teacher text-5xl opacity-20"></i>
      </div>

      {/* Key Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-250">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-sm font-medium text-gray-500">Total Questions</div>
              <div className="text-3xl font-bold text-gray-900 my-2">2,547</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary flex items-center justify-center">
              <i className="fas fa-question-circle text-lg"></i>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-success">
            <i className="fas fa-arrow-up"></i>
            <span>+12% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-250">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-sm font-medium text-gray-500">Active Students</div>
              <div className="text-3xl font-bold text-gray-900 my-2">1,234</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-green-100 text-success flex items-center justify-center">
              <i className="fas fa-user-graduate text-lg"></i>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-success">
            <i className="fas fa-arrow-up"></i>
            <span>+8% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-250">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-sm font-medium text-gray-500">Completed Exams</div>
              <div className="text-3xl font-bold text-gray-900 my-2">89</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-yellow-100 text-warning flex items-center justify-center">
              <i className="fas fa-clipboard-list text-lg"></i>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-success">
            <i className="fas fa-arrow-up"></i>
            <span>+15% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-250">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-sm font-medium text-gray-500">Staff Members</div>
              <div className="text-3xl font-bold text-gray-900 my-2">45</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-red-100 text-danger flex items-center justify-center">
              <i className="fas fa-chalkboard-teacher text-lg"></i>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-danger">
            <i className="fas fa-arrow-down"></i>
            <span>-2% from last month</span>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <i className="fas fa-bolt text-primary"></i>
            <span>Quick Actions</span>
          </h2>
          <Link to="#" className="text-sm text-primary hover:text-accent font-medium hover:underline transition-colors">View All</Link>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">Frequently used actions for efficient management</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/question-bank" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-250 block group">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
              <i className="fas fa-book text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Question Bank</h3>
            <p className="text-sm text-gray-500 mb-2">Browse and manage questions</p>
            <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
          </Link>
          
          <Link to="/students" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-250 block group">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
              <i className="fas fa-users text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Manage Students</h3>
            <p className="text-sm text-gray-500 mb-2">View and edit student records</p>
            <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
          </Link>
          
          <Link to="/analytics" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-250 block group">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
              <i className="fas fa-chart-pie text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-sm text-gray-500 mb-2">Check performance metrics</p>
            <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
          </Link>
          
          <Link to="/mock-exams" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-250 block group">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
              <i className="fas fa-file-alt text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Create Exam</h3>
            <p className="text-sm text-gray-500 mb-2">Set up a new mock test</p>
            <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
          </Link>
          
          <Link to="/attendance" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-250 block group">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
              <i className="fas fa-calendar-day text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Take Attendance</h3>
            <p className="text-sm text-gray-500 mb-2">Record today's attendance</p>
            <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </section>
      
      <div className="mt-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">More features coming soon!</h2>
          <p className="text-gray-500">Charts, activities, and system status will be added in future updates.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;


