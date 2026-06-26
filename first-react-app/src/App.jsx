import { useEffect, useState } from "react";
import { supabase } from './supabaseClient';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
 // 1. Tạo state chứa mảng danh sách các ghi chú
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes') // Tên bảng bạn tạo trên Supabase
      .select('*');  // Lấy hết các cột
    if (!error) setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // 2. Hàm xử lý khi con (NoteForm) gửi dữ liệu lên
  const handleAddNote = async (newNote) => {
    const { data, error } = await supabase
      .from('notes')
      .insert([{ title: newNote.title, content: newNote.content }])
      .select();

    if (error) {
      console.error('Insert note failed:', error);
      return;
    }

    if (data) {
      setNotes((currentNotes) => [...currentNotes, ...data]);
    }
  };
  // Hàm xóa note nhận vào id của note cần xóa
  const handleDeleteNote = async (noteId) => {
  try {
    // 1. Gọi Supabase SDK để xóa dòng dữ liệu
    const { data, error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteId)
      .select();

    if (error) {
      console.error("Lỗi từ Supabase:", error.message);
      alert("Xóa thất bại!");
      return;
    }

    // 2. Nếu không lỗi, cập nhật lại State trên UI để biến mất khỏi màn hình
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    console.log("Đã xóa dòng:", data);

  } catch (error) {
    console.error("Lỗi hệ thống:", error);
  }
};
  // Gọi hàm fetchNotes để lấy dữ liệu từ Supabase khi component được render
  return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: '#333' }}>📝 Danh sách Notes từ Database</h1>
    <NoteForm onAddNote={handleAddNote} />
    <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
  </div>
);
}

export default App;