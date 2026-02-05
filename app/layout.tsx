import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snehal Sukhadeve | Senior Software Architect",
  description:
    "Portfolio of Snehal Sukhadeve, a Senior Software Engineer specializing in React, Java, and System Architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@100;300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem("snehal-theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                
                if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (e) {}
            })();
            
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  fontFamily: {
                    display: ['Space Grotesk', 'sans-serif'],
                    sans: ['Inter', 'sans-serif'],
                  },
                }
              }
            }
          `,
          }}
        />
      </head>
      <body className="dark:bg-[#020205] bg-slate-50 transition-colors duration-500">
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  );
}
