import { useState } from 'react';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Layout 
      user={user}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}

export default App;