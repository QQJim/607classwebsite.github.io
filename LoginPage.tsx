import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  const { login, register } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'teacher' | 'student' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !role) return;

    try {
      if (isRegisterMode) {
        await register(username, password, role);
      } else {
        await login(username, password, role);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?classroom)' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">607班級網站</h1>
        
        {!role ? (
          <div className="space-y-4">
            <button
              onClick={() => setRole('teacher')}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">👨‍🏫</span> 老師登入
            </button>
            <button
              onClick={() => setRole('student')}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">👨‍🎓</span> 學生登入
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">使用者名稱</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="請輸入使用者名稱"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">密碼</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="請輸入密碼"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isRegisterMode ? '註冊' : '登入'}
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
                className="text-indigo-600 hover:underline"
              >
                {isRegisterMode ? '已有帳號？登入' : '沒有帳號？立即註冊'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}