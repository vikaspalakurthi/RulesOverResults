import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, TrendingUp, TrendingDown, Minus } from "lucide-react";

const journalEntries = [
  {
    id: 1,
    date: "March 28, 2026",
    tradesSummary: "2 trades on ES futures. 1 win on ORB setup, 1 scratch on failed continuation. Net +1.2R.",
    keyLesson: "Patience on the second entry would have avoided the scratch. Wait for confirmation candle to close before entering pullback trades.",
    result: "win",
  },
  {
    id: 2,
    date: "March 27, 2026",
    tradesSummary: "1 trade on NQ. Fade setup at resistance. Stopped out for -1R before market reversed in my direction.",
    keyLesson: "Stop placement was technically correct, but the wick stop-hunt is common at key levels. Consider using time-based stops or wider initial stops with smaller size.",
    result: "loss",
  },
  {
    id: 3,
    date: "March 26, 2026",
    tradesSummary: "No trades taken. Pre-market showed choppy, range-bound conditions with no clear directional bias.",
    keyLesson: "Sitting out is a valid decision. Protecting capital on low-probability days compounds over time. Discipline is measured by what you do not do.",
    result: "neutral",
  },
];

function ResultIcon({ result }: { result: string }) {
  if (result === "win") return <TrendingUp className="h-4 w-4 text-emerald-500" />;
  if (result === "loss") return <TrendingDown className="h-4 w-4 text-red-400" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

export function Journal() {
  return (
    <section id="journal" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
            Trade Journal
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journalEntries.map((entry) => (
            <Card key={entry.id} className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
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
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Key Lesson
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {entry.keyLesson}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
