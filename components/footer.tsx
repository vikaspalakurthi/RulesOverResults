import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground tracking-tight">
              Arvik<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">Strategies</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Journal
            </Link>
            <Link href="/playbooks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Playbooks
            </Link>
            <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tools
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arvik Strategies
          </p>
        </div>
      </div>
    </footer>
  );
}
