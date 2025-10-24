import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, title = "Dashboard", breadcrumbs = [] }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const navItems = [
    { path: '/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { path: '/question-bank', icon: 'fas fa-book-open', label: 'Question Bank' },
    { path: '/mock-exams', icon: 'fas fa-clipboard-check', label: 'Exams' },
    { path: '/students', icon: 'fas fa-users', label: 'Students' },
    { path: '/class-management', icon: 'fas fa-chalkboard', label: 'Classes' },
    { path: '/exam-results', icon: 'fas fa-poll', label: 'Results' },
    { path: '/analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { path: '/staff', icon: 'fas fa-chalkboard-teacher', label: 'Staff' },
    { path: '/department-management', icon: 'fas fa-building', label: 'Departments' },
    { path: '/roles-permissions', icon: 'fas fa-user-shield', label: 'Roles & Permissions' },
    { path: '/attendance', icon: 'fas fa-calendar-check', label: 'Attendance' },
    { path: '/login', icon: 'fas fa-sign-out-alt', label: 'Logout' },
  ];

  return (
    <div className={`flex min-h-screen transition-all duration-250 ${sidebarCollapsed ? '' : ''}`}>
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-surface border-r border-gray-200 transition-all duration-250 sticky top-0 h-screen overflow-y-auto shadow-sm relative`}>
        <div className="p-4 flex flex-col h-full">
          <div className="p-4 mb-4 flex items-center justify-center border-b border-gray-200">
            <div className="flex items-center gap-2 text-primary font-bold text-xl">
              <i className="fas fa-graduation-cap text-2xl"></i>
              {!sidebarCollapsed && <span>ScholarPrep</span>}
            </div>
          </div>
          
          <div className="flex flex-col gap-1 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-250 relative font-medium ${
                  location.pathname === item.path 
                    ? 'bg-primary-100 text-primary font-semibold before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-lg' 
                    : 'text-gray-500 hover:bg-primary-100 hover:text-primary'
                } ${sidebarCollapsed ? 'justify-center' : ''}`}
              >
                <i className={`${item.icon} ${sidebarCollapsed ? 'text-lg' : 'mr-3'} w-6 text-center`}></i>
                {!sidebarCollapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Toggle Button - Fixed on right middle */}
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full shadow-md hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-250 flex items-center justify-center text-gray-600 z-20"
        >
          <i className={`fas fa-chevron-${sidebarCollapsed ? 'right' : 'left'} text-sm`}></i>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-bg">
        <header className="bg-surface px-8 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/dashboard" className="hover:text-primary transition-colors">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-400">/</span>
                  {crumb.link ? (
                    <Link to={crumb.link} className="hover:text-primary transition-colors">{crumb.text}</Link>
                  ) : (
                    <span>{crumb.text}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-60 focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3 relative">
              <div className="absolute -top-1 -right-1 bg-danger text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold">
                3
              </div>
              <div className="text-right">
                <div className="font-medium text-sm">Admin User</div>
                <div className="text-xs text-gray-500">Super Admin</div>
              </div>
              <img 
                src="https://i.pravatar.cc/40" 
                alt="Admin" 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-100"
              />
            </div>
          </div>
        </header>
        
        <main className="px-8 py-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;


