"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/tools", label: "Tools" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
          Arvik<span className="text-primary">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="gap-2" asChild>
            <a href="https://discord.gg/xePFAqKC4" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`block text-sm transition-colors py-2 ${
                  pathname === link.href 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="gap-2 w-full mt-2" asChild>
              <a href="https://discord.gg/xePFAqKC4" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
