import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { name: 'Email', href: 'mailto:ibadkath88@gmail.com' }, 
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
            Ibad Kath<span className="text-indigo-600"></span>
          </Link>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Available for hire
          </span>
        </div>
        
      </div>
    </footer>
  );
}