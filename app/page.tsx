import Link from "next/link";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Disclaimer } from "@/components/disclaimer";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import { journalEntries } from "@/lib/journal-data";

function ResultIcon({ result }: { result: string }) {
  if (result === "win") return <TrendingUp className="h-4 w-4 text-emerald-500" />;
  if (result === "loss") return <TrendingDown className="h-4 w-4 text-red-400" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

export default function Home() {
  const recentEntries = journalEntries.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        
        {/* Recent Journal Preview */}
        <section className="px-6 py-24 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Recent Journal Entries</h2>
                <p className="text-muted-foreground">Latest trades and lessons learned</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/journal" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentEntries.map((entry) => (
                <Link key={entry.id} href={`/journal/${entry.slug}`}>
                  <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-300 h-full group cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CalendarDays className="h-4 w-4" />
                          {entry.date}
                        </div>
                        <ResultIcon result={entry.result} />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                          Trades Summary
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {entry.tradesSummary}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                        Read full entry
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
}
