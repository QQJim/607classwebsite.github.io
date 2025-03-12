import React from 'react';

export function MessageBoard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">留言板</h1>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <textarea
          className="w-full px-3 py-2 border rounded-lg"
          rows={3}
          placeholder="在此輸入留言..."
        />
        <div className="flex justify-end mt-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            發布留言
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">尚無留言</p>
        </div>
      </div>
    </div>
  );
}