function NoteList({ notes, onDeleteNote }) {
  // notes ở trên chính là props (danh sách ghi chú) do Component Cha truyền xuống

  // Trường hợp chưa có ghi chú nào trong danh sách
  if (notes.length === 0) {
    return <p className="text-gray-500 text-center my-4">
      Chưa có ghi chú nào. Hãy thêm mới nhé!
      </p>;
  }

return (
    <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
      {/* Vòng lặp qua từng phần tử trong hộp chứa notes */}
      {notes.map((item) => (
        <div 
          key={item.id} // Mỗi phần tử trong danh sách React bắt buộc phải có 1 key duy nhất (dân QC gọi là Unique ID)
          style={{ 
            padding: '15px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            backgroundColor: '#f9f9f9' 
          }}
        >
          {/* DÂN HỎI: Hãy điền biến hiển thị TIÊU ĐỀ vào đây */}
          <h3 style={{ margin: '0 0 10px 0', color: '#0070f3' }}>
            {item.title} 
          </h3>

          {/* DÂN HỎI: Hãy điền biến hiển thị NỘI DUNG vào đây */}
          <p style={{ margin: 0, color: '#555' }}>
            {item.content}
          </p>
          <button 
            onClick={() => onDeleteNote(item.id)} // Khi click, gọi hàm xóa và truyền id của note này lên cha
            className="text-red-500 hover:text-red-700 font-medium px-2 py-1 rounded border border-red-200 hover:bg-red-50 transition"
          >
            Xóa
          </button>
        </div>
        
      ))}
    </div>
  );
}

export default NoteList;