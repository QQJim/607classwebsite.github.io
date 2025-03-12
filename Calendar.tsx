import React from 'react';

export function Calendar() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">行事曆</h1>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <button className="px-3 py-1 border rounded">&lt;</button>
          <h2 className="text-xl font-semibold">2025年3月</h2>
          <button className="px-3 py-1 border rounded">&gt;</button>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
            <div key={day} className="text-center font-medium p-2">{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
}