import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, TrendingUp, TrendingDown, Minus, ArrowLeft } from "lucide-react";
import { getJournalEntryBySlug, journalEntries } from "@/lib/journal-data";

function ResultBadge({ result }: { result: string }) {
  if (result === "win") {
    return (
      <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
        <TrendingUp className="h-3 w-3 mr-1" />
        Profitable Day
      </Badge>
    );
  }
  if (result === "loss") {
    return (
      <Badge className="bg-red-400/10 text-red-400 hover:bg-red-400/20">
        <TrendingDown className="h-3 w-3 mr-1" />
        Loss Day
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted text-muted-foreground hover:bg-muted">
      <Minus className="h-3 w-3 mr-1" />
      No Trade Day
    </Badge>
  );
}

export async function generateStaticParams() {
  return journalEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function JournalEntryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const entry = getJournalEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <article className="px-6 py-24">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/journal" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-3 text-muted-foreground text-sm mb-4">
                <CalendarDays className="h-4 w-4" />
                {entry.date}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Journal Entry
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <ResultBadge result={entry.result} />
                {entry.instruments.map((instrument) => (
                  <Badge key={instrument} variant="outline">
                    {instrument}
                  </Badge>
                ))}
                {entry.setupsUsed.map((setup) => (
                  <Badge key={setup} variant="secondary">
                    {setup}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Summary
              </h2>
              <p className="text-foreground leading-relaxed">
                {entry.tradesSummary}
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12">
              <h2 className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Key Lesson
              </h2>
              <p className="text-foreground leading-relaxed">
                {entry.keyLesson}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-foreground mb-6">Full Notes</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {entry.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
