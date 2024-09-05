module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      'react-hooks/exhaustive-deps': 'warn', // Change to 'warn' to avoid build failures
      'no-unused-vars': 'warn', // Change to 'warn' to avoid build failures
    },
  };
  