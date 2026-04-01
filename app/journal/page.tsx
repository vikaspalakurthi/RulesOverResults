import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import { journalEntries } from "@/lib/journal-data";

function ResultIcon({ result }: { result: string }) {
  if (result === "win") return <TrendingUp className="h-4 w-4 text-emerald-500" />;
  if (result === "loss") return <TrendingDown className="h-4 w-4 text-red-400" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-foreground mb-4">Trade Journal</h1>
              <p className="text-muted-foreground max-w-2xl">
                A record of trades, lessons, and continuous improvement. Each entry focuses on process over results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journalEntries.map((entry) => {
                const card = (
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
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Trades Summary</h4>
                        <p className="text-sm text-foreground leading-relaxed">{entry.tradesSummary}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Key Lesson</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{entry.keyLesson}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                        {entry.externalLink ? "Open external journal" : "Read full entry"}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                );

                if (entry.externalLink) {
                  return (
                    <a key={entry.id} href={entry.externalLink} target="_blank" rel="noopener noreferrer" className="group">
                      {card}
                    </a>
                  );
                }

                return (
                  <Link key={entry.id} href={`/journal/${entry.slug}`}>
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

