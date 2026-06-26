import { createClient } from '@supabase/supabase-js';

// Đọc thông tin từ file .env.local mà chúng ta vừa giấu
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
   throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment');
 }

// Tạo ra một thực thể "supabase" để sẵn sàng gọi dữ liệu
export const supabase = createClient(supabaseUrl, supabaseAnonKey);