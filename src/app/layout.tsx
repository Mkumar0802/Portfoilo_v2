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
      <body className='bg-white text-black'>
        <header>
          <nav>
            <ul className='flex gap-16 justify-center font-semibold font-sans text-2xl'>
              <li><a href="#home">Home</a></li>
              <li><a href="#hero">Hero</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Portfolio</footer>
      </body>
    </html>
  );
}
