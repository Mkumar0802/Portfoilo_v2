// /src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio created using Next.js 13+',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-custom-text">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <nav>
            <ul className="flex gap-16 justify-center font-semibold font-sans text-2xl p-4">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="mt-[72px]">{/* Adjust margin to match header height */}
          {children}
        </main>
        <footer className="text-center py-4">© 2024 My Portfolio</footer>
      </body>
    </html>
  );
}
