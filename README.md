# ScholarPrep - Education Management Platform

A comprehensive education management platform built with React, featuring admin dashboards, question banks, student management, and analytics.

## Features

### Admin Features
- **Dashboard**: Overview of key metrics and quick actions
- **Question Bank**: Manage questions with multiple import methods (Manual, Bulk CSV/Excel, PDF/Image, AI Generator)
- **Mock Exams**: Create and manage mock examinations
- **Class Management**: Organize and manage classes
- **Student Management**: Track and manage student records
- **Department Management**: Manage academic departments
- **Exam Results**: View and analyze exam results
- **Analytics**: Comprehensive performance analytics
- **Attendance**: Track student attendance
- **Roles & Permissions**: Manage user roles and permissions

### Student Features
- **Student Login**: Secure authentication for students
- **Student Dashboard**: Personalized student dashboard (Coming Soon)

## Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sp-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
sp-frontend/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── StudentLogin.jsx
│   │   ├── QuestionBank.jsx
│   │   ├── AdminMockExams.jsx
│   │   ├── ClassManagement.jsx
│   │   ├── ExamResults.jsx
│   │   ├── Analytics.jsx
│   │   ├── DepartmentManagement.jsx
│   │   ├── RolesPermissions.jsx
│   │   ├── Attendance.jsx
│   │   └── Layout.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   └── index.js         # Entry point
├── Admin/               # HTML templates (reference)
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Routes

### Admin Routes
- `/` or `/dashboard` - Admin Dashboard
- `/login` - Admin Login
- `/question-bank` - Question Bank Management
- `/mock-exams` - Mock Exams
- `/class-management` - Class Management
- `/exam-results` - Exam Results
- `/analytics` - Analytics Dashboard
- `/department-management` - Department Management
- `/roles-permissions` - Roles & Permissions
- `/attendance` - Attendance Tracking

### Student Routes
- `/student-login` - Student Login

## Default Credentials

### Admin
- Username: `admin`
- Password: `admin123`

### Student
- Username: `student`
- Password: `student123`

**Note**: These are demo credentials. In production, implement proper authentication.

## Customization

### Tailwind Configuration
Edit `tailwind.config.js` to customize colors, fonts, and other design tokens:

```js
theme: {
  extend: {
    colors: {
      primary: '#4361ee',
      // Add your custom colors
    },
  },
}
```

### Adding New Routes
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add route to Routes section

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@scholarprep.com or open an issue in the repository.
