// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logout } from '../features/auth/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  
  // useSelector to read data from the Redux store
  const { isAuthenticated, user, status, error } = useSelector((state) => state.auth);
  
  // useDispatch to send actions to the Redux store
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isAuthenticated) {
    return (
      <div className="p-4 border rounded-lg bg-green-50">
        <h3 className="text-lg font-semibold text-green-800">Welcome, {user.name}!</h3>
        <p>You are successfully logged in.</p>
        <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Test Redux Login</h3>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full py-2 px-4 bg-brand-yellow text-black font-semibold rounded-md hover:bg-yellow-400 disabled:bg-gray-400">
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>
        {status === 'failed' && <p className="text-red-500 text-sm">Error: {error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;