import React from 'react';

export function Students() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">學生名單</h1>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">使用者名稱</th>
                <th className="py-2 px-4 border-b text-left">上次登入</th>
                <th className="py-2 px-4 border-b text-left">作業完成率</th>
                <th className="py-2 px-4 border-b text-left">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4" colSpan={4}>
                  <p className="text-gray-600">尚無學生資料</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}