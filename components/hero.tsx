import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
          Trading Discipline Journal
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Rules Over Results
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          A trading discipline journal focused on process, not profits
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link href="/journal">
              View Journal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
            <a href="https://discord.gg/xePFAqKC4" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Join Discord
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
