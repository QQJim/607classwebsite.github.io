import { User } from '../types';
import { Sidebar } from './Sidebar';
import { Dashboard } from '../pages/Dashboard';
import { Announcements } from '../pages/Announcements';
import { Calendar } from '../pages/Calendar';
import { MessageBoard } from '../pages/MessageBoard';
import { Homework } from '../pages/Homework';
import { PhotoAlbum } from '../pages/PhotoAlbum';
import { Students } from '../pages/Students';

interface LayoutProps {
  user: User;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Layout({ user, currentPage, onPageChange }: LayoutProps) {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'announcements':
        return <Announcements />;
      case 'calendar':
        return <Calendar />;
      case 'message-board':
        return <MessageBoard />;
      case 'homework':
        return <Homework />;
      case 'photo-album':
        return <PhotoAlbum />;
      case 'students':
        return user.role === 'teacher' ? <Students /> : null;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">607班級網站</span>
            <div className="flex items-center space-x-4">
              <span className="hidden md:block">{user.username}</span>
              <span className="bg-indigo-500 px-2 py-1 rounded text-xs">
                {user.role === 'teacher' ? '老師' : '學生'}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <Sidebar 
          currentPage={currentPage}
          onPageChange={onPageChange}
          isTeacher={user.role === 'teacher'}
        />
        <main className="flex-1 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}