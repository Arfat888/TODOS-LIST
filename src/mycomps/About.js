import React from 'react';

const About = () => {
  const aboutStyle = {
    backgroundColor: '#f4f4f4',
    color: '#333',
    padding: '40px',
    margin: '20px auto',
    borderRadius: '10px',
    maxWidth: '800px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const titleStyle = {
    color: '#0066cc',
    fontSize: '2.5rem',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    textAlign: 'justify'
  };

  return (
    <div style={aboutStyle}>
      <h1 style={titleStyle}>About the Todos List</h1>
      <p style={textStyle}>
        Welcome to the Todos List application! This simple yet powerful tool helps you keep track of your daily tasks and to-dos. Whether you need to manage your personal or work-related tasks, this app provides a straightforward way to organize everything in one place.
      </p>
      <p style={textStyle}>
        You can easily add, delete, and update your tasks to ensure you stay on top of your responsibilities. Your todos are stored locally on your device, so they remain accessible even when you're offline.
      </p>
      <p style={textStyle}>
        Thank you for using the Todos List app! We hope it helps you stay organized and productive.
      </p>
    </div>
  );
}

export default About;
