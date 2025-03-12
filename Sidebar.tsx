import { Home, Bell, Calendar, MessageSquare, BookOpen, Camera, Users } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isTeacher: boolean;
}

export function Sidebar({ currentPage, onPageChange, isTeacher }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: '主頁面', icon: Home },
    { id: 'announcements', label: '最新公告', icon: Bell },
    { id: 'calendar', label: '行事曆', icon: Calendar },
    { id: 'message-board', label: '留言板', icon: MessageSquare },
    { id: 'homework', label: '作業', icon: BookOpen },
    { id: 'photo-album', label: '相簿', icon: Camera },
    { id: 'students', label: '學生名單', icon: Users, teacherOnly: true },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-medium">選單</h2>
      </div>
      <div className="py-2">
        {menuItems.map((item) => {
          if (item.teacherOnly && !isTeacher) return null;
          
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full text-left px-4 py-2 flex items-center space-x-2 transition-colors hover:bg-gray-700 ${
                currentPage === item.id ? 'bg-gray-700' : ''
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}