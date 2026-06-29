import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'FocusFlow',
  description: 'Focus better, achieve more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html
    //   lang="en"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    // >
    //   <body className="min-h-full flex flex-col">{children}</body>
    // </html>
    <html lang="en" className="dark">
      <head>
        {/* Link Icons từ Google */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


// src/app/layout.js
// export const metadata = {
//   title: 'FocusFlow',
//   description: 'Focus better, achieve more',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="dark">
//       <head>
//         {/* Link Icons từ Google */}
//         <link 
//           rel="stylesheet" 
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
