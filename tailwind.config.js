/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4361ee',
          50: '#f0f3ff',
          100: '#e0e7ff',
          500: '#4361ee',
          600: '#3a56d4',
          700: '#2e4bc7',
        },
        accent: {
          DEFAULT: '#f72585',
          50: '#fce4ec',
          100: '#f8bbd9',
          500: '#f72585',
        },
        surface: '#ffffff',
        text: {
          DEFAULT: '#1e293b',
          light: '#64748b',
          muted: '#94a3b8',
        },
        bg: '#f8fafc',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
      },
      borderRadius: {
        'DEFAULT': '12px',
        'sm': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'gap': '1rem',
      },
      transitionDuration: {
        'DEFAULT': '250ms',
      }
    },
  },
  plugins: [],
}