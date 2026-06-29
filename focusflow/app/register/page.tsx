'use client';

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

// Định nghĩa kiểu dữ liệu cho danh sách các ô nhập liệu trong form
type FieldName = 'name' | 'email' | 'password' | 'confirmPassword';

export default function RegisterPage() {
  // Quản lý trạng thái ô nào đang được focus để xử lý hiệu ứng icon
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  
  // Quản lý giá trị nhập vào để giữ trạng thái icon sáng nếu ô đó có chữ
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: FieldName) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Hàm trả về style biến đổi của icon (FILL 1 hoặc 0) tùy theo trạng thái focus hoặc đã nhập chữ
  const getIconStyle = (field: FieldName) => {
    const isFocused = focusedField === field;
    const hasValue = formValues[field] !== '';
    
    return {
      color: isFocused || hasValue ? '#8aebff' : '#859397',
      fontVariationSettings: isFocused || hasValue ? "'FILL' 1" : "'FILL' 0",
    };
  };

  return (
    <div className="bg-[#101415] text-[#e0e3e5] min-h-screen flex flex-col justify-between font-sans antialiased selection:bg-cyan-500/30">
      
      {/* TopNavBar */}
      <header className="w-full sticky top-0 z-50 bg-[#101415]/80 backdrop-blur-md border-b border-[#3c494c]">
        <div className="flex justify-between items-center h-16 px-6 max-w-[1280px] mx-auto">
          <div className="text-2xl font-bold text-[#8aebff]">FocusFlow</div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-[#bbc9cd] text-sm hover:text-[#22d3ee] transition-colors">
              Products
            </Link>
            <Link href="#" className="text-[#bbc9cd] text-sm hover:text-[#22d3ee] transition-colors">
              About
            </Link>
            <Link href="/login" className="ml-4 text-[#bbc9cd] text-sm hover:text-[#8aebff] transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-8 px-6 relative overflow-hidden">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8aebff]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#cfdef7]/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Central Registration Card */}
        <div className="relative w-full max-w-[480px] z-10">
          <div className="bg-[rgba(31,41,55,0.7)] backdrop-blur-md border border-[rgba(55,65,81,1)] rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Hiệu ứng Shimmer chạy nền giả lập bằng CSS */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(138,235,255,0.05),transparent)] bg-[length:200%_100%] animate-[shimmer_8s_infinite_linear]"></div>

            {/* Branding Header */}
            <div className="text-center mb-8 relative z-10">
              <h1 className="text-3xl font-bold text-[#e0e3e5] tracking-tight mb-1">FocusFlow</h1>
              <p className="text-sm text-[#bbc9cd] opacity-80">Focus better, achieve more</p>
            </div>

            {/* Google Auth Button */}
            <button className="w-full h-12 flex items-center justify-center gap-4 bg-white text-[#101415] rounded-lg text-sm font-medium hover:bg-slate-100 transition-all active:scale-95 mb-6 relative z-10">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Sign up with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="h-[1px] flex-grow bg-[#3c494c]"></div>
              <span className="text-xs text-[#bbc9cd] uppercase tracking-widest font-medium">or</span>
              <div className="h-[1px] flex-grow bg-[#3c494c]"></div>
            </div>

            {/* Registration Form */}
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#bbc9cd] px-1">Full Name</label>
                <div className="bg-[#101415] border border-[#374151] focus-within:border-[#22d3ee] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] flex items-center px-4 py-2.5 rounded-lg transition-all duration-200">
                  <span 
                    className="material-symbols-outlined mr-4 transition-all duration-200"
                    style={getIconStyle('name')}
                  >
                    person
                  </span>
                  <input 
                    className="bg-transparent border-none outline-none focus:ring-0 text-sm text-[#e0e3e5] w-full placeholder:text-[#859397]/50" 
                    placeholder="John Doe" 
                    type="text"
                    value={formValues.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#bbc9cd] px-1">Email Address</label>
                <div className="bg-[#101415] border border-[#374151] focus-within:border-[#22d3ee] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] flex items-center px-4 py-2.5 rounded-lg transition-all duration-200">
                  <span 
                    className="material-symbols-outlined mr-4 transition-all duration-200"
                    style={getIconStyle('email')}
                  >
                    mail
                  </span>
                  <input 
                    className="bg-transparent border-none outline-none focus:ring-0 text-sm text-[#e0e3e5] w-full placeholder:text-[#859397]/50" 
                    placeholder="john@example.com" 
                    type="email"
                    value={formValues.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Password Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-[#bbc9cd] px-1">Password</label>
                  <div className="bg-[#101415] border border-[#374151] focus-within:border-[#22d3ee] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] flex items-center px-4 py-2.5 rounded-lg transition-all duration-200">
                    <span 
                      className="material-symbols-outlined mr-4 transition-all duration-200"
                      style={getIconStyle('password')}
                    >
                      lock
                    </span>
                    <input 
                      className="bg-transparent border-none outline-none focus:ring-0 text-sm text-[#e0e3e5] w-full placeholder:text-[#859397]/50" 
                      placeholder="••••••••" 
                      type="password"
                      value={formValues.password}
                      onChange={(e) => handleInputChange(e, 'password')}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-[#bbc9cd] px-1">Confirm Password</label>
                  <div className="bg-[#101415] border border-[#374151] focus-within:border-[#22d3ee] focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] flex items-center px-4 py-2.5 rounded-lg transition-all duration-200">
                    <span 
                      className="material-symbols-outlined mr-4 transition-all duration-200"
                      style={getIconStyle('confirmPassword')}
                    >
                      lock_reset
                    </span>
                    <input 
                      className="bg-transparent border-none outline-none focus:ring-0 text-sm text-[#e0e3e5] w-full placeholder:text-[#859397]/50" 
                      placeholder="••••••••" 
                      type="password"
                      value={formValues.confirmPassword}
                      onChange={(e) => handleInputChange(e, 'confirmPassword')}
                      onFocus={() => setFocusedField('confirmPassword')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>
              </div>

              {/* Primary Action Button */}
              <button 
                className="w-full h-12 bg-[#22d3ee] text-[#005763] text-base font-bold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all active:scale-95 duration-100 mt-8" 
                type="submit"
              >
                Create Account
              </button>
            </form>

            {/* Footer Link */}
            <div className="text-center mt-8 relative z-10">
              <p className="text-sm text-[#bbc9cd]">
                Already have an account?{' '}
                <Link href="/login" className="text-[#2fd9f4] font-bold hover:underline transition-all">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          
          {/* Decorative Border */}
          <div className="absolute -inset-px rounded-xl border border-[#8aebff]/20 pointer-events-none"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#191c1e] border-t border-[#3c494c]">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 max-w-[1280px] mx-auto">
          <div className="text-sm font-bold text-[#e0e3e5] mb-4 md:mb-0">FocusFlow</div>
          <div className="flex gap-6">
            <Link href="#" className="text-[#bbc9cd] text-xs hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Terms</Link>
            <Link href="#" className="text-[#bbc9cd] text-xs hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Privacy</Link>
            <Link href="#" className="text-[#bbc9cd] text-xs hover:text-[#8aebff] transition-colors opacity-80 hover:opacity-100">Help</Link>
          </div>
          <div className="text-[#bbc9cd] text-xs mt-4 md:mt-0 opacity-80">
            © 2024 FocusFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}