"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function AuthForm() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, loginData);
      const token = res.data.token;
      localStorage.setItem('token', token);
      router.push('/');
    } catch (err: any) {
      console.error('Login Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, registerData);
      const token = res.data.token;
      localStorage.setItem('token', token);
      router.push('/');
    } catch (err: any) {
      console.error('Register Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white text-black border border-gray-200 rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {mode === 'login' ? 'Login' : 'Register'}
      </h2>

      {mode === 'login' ? (
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Username or Email</label>
            <Input
              type="text"
              name="identifier"
              value={loginData.identifier}
              onChange={handleLoginChange}
              className="bg-white text-black border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <Input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="bg-white text-black border-gray-300"
              required
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full bg-black text-white hover:text-black hover:bg-white hover:border-black ">
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Username</label>
            <Input
              type="text"
              name="username"
              value={registerData.username}
              onChange={handleRegisterChange}
              className="bg-white text-black border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <Input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              className="bg-white text-black border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <Input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              className="bg-white text-black border-gray-300"
              required
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full bg-black text-white hover:bg-gray-900">
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
      )}

      <div className="mt-4 text-center">
        {mode === 'login' ? (
          <p>
            Don't have an account?{' '}
            <button
              onClick={() => setMode('register')}
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button
              onClick={() => setMode('login')}
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
