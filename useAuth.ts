import { useState, useEffect } from 'react';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement Firebase auth listener
    const unsubscribe = () => {};
    return () => unsubscribe();
  }, []);

  const login = async (username: string, password: string, role: 'teacher' | 'student') => {
    // TODO: Implement Firebase auth login
  };

  const register = async (username: string, password: string, role: 'teacher' | 'student') => {
    // TODO: Implement Firebase auth registration
  };

  const logout = async () => {
    // TODO: Implement Firebase auth logout
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout
  };
}