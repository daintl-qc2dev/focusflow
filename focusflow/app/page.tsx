'use client'; // Bắt buộc phải có dòng này để chạy được useEffect/useState trong Next.js

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Điều chỉnh đường dẫn cho đúng file ở Bước 3

export default function Home() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('notes').select('*');
      if (!error && data) {
        setDataList(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🌊 Chào mừng đến với FocusFlow</h1>
      <p>Ứng dụng đã kết nối thành công với Supabase!</p>
      
      {/* Hiển thị thử số lượng dòng data lấy được */}
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Số lượng bản ghi tìm thấy: {dataList.length}
      </div>
    </div>
  );
}