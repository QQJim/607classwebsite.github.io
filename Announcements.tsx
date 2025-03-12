import React from 'react';

export function Announcements() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">公告</h1>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">尚無公告</p>
        </div>
      </div>
    </div>
  );
}