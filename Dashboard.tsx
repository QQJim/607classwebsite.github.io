import React from 'react';

export function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">歡迎來到607班級網站</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">重要日期倒數</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">期中考試</h3>
            <div className="text-2xl font-bold text-indigo-600">00天00時00分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">期末考試</h3>
            <div className="text-2xl font-bold text-indigo-600">00天00時00分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">畢業典禮</h3>
            <div className="text-2xl font-bold text-indigo-600">00天00時00分</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">最新公告</h2>
          <div className="space-y-2">
            <div className="border-b pb-2">
              <h3 className="font-medium">無資料</h3>
              <p className="text-sm text-gray-600">請稍後再試</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">最新作業</h2>
          <div className="space-y-2">
            <div className="border-b pb-2">
              <h3 className="font-medium">無資料</h3>
              <p className="text-sm text-gray-600">請稍後再試</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}