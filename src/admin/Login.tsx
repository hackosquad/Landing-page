import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const docRef = doc(db, 'credentials', 'adminLogin');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.id === userId && data.password === password) {
          navigate('/messages');
        } else {
          setError('Invalid ID or password');
        }
      } else {
        setError('Login data not found');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-full max-w-sm border border-red-500">
        <h2 className="text-3xl font-bold mb-6 text-red-500 text-center">HackoSquad Login</h2>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm mb-1">ID</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-black border border-red-500 rounded text-white focus:outline-none"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black border border-red-500 rounded text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
