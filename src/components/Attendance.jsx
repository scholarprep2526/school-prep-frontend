import React from 'react';
import Layout from './Layout';

const Attendance = () => {
  return (
    <Layout title="Attendance" breadcrumbs={[{ text: "Attendance" }]}>
      <div className="text-center py-16">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Attendance</h1>
        <p className="text-gray-500">Attendance tracking - Coming Soon</p>
      </div>
    </Layout>
  );
};

export default Attendance;
