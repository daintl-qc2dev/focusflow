import { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInsertNote = async (e) => {
  // 1. Ngăn trang web bị F5 (tải lại) theo cơ chế mặc định của thẻ <form>
  e.preventDefault(); 

  // Nếu user chưa nhập gì mà đã bấm nút thì không làm gì cả
  if (title.trim() === "") return;
  if (content.trim() === "") return;
  
    // 3. REFETCH: Gọi lại hàm lấy danh sách để giao diện cập nhật note mới
    onAddNote({ title, content }); 
    // 4. RESET FORM: Xóa chữ trong ô nhập về rỗng như bạn vừa đoán đúng ở trên nhé!
    setTitle("");
    setContent("");
}; 

  return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>    
    <form onSubmit={handleInsertNote} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Nhập tiêu đề note..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <input 
        type="text" 
        placeholder="Nhập content note..." 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Thêm Note
      </button>
    </form>
  </div>
);
}

export default NoteForm;