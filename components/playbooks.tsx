import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Shield, Clock } from "lucide-react";

const playbooks = [
  {
    id: "A",
    name: "Opening Range Breakout",
    icon: Clock,
    description: "Trade the initial breakout of the opening range after the first 15-30 minutes of price discovery.",
    rules: [
      "Wait for opening range to establish (15-30 min)",
      "Entry on confirmed break with volume",
      "Stop below/above range low/high",
      "Target 1:2 risk-reward minimum",
    ],
  },
  {
    id: "B",
    name: "Overextension Fade",
    icon: Target,
    description: "Fade overextended moves at key levels when price has moved too far, too fast from value.",
    rules: [
      "Identify overextension using ATR or standard deviations",
      "Confluence with key S/R level required",
      "Wait for rejection candle confirmation",
      "Tight stop above/below entry candle",
    ],
  },
  {
    id: "C",
    name: "Trend Continuation",
    icon: BookOpen,
    description: "Join established trends on pullbacks to dynamic support or resistance levels.",
    rules: [
      "Confirm trend direction (higher highs/lows or vice versa)",
      "Wait for pullback to VWAP, EMA, or prior structure",
      "Entry on bounce with momentum confirmation",
      "Trail stop as trend extends",
    ],
  },
  {
    id: "D",
    name: "Risk Management",
    icon: Shield,
    description: "Universal rules that apply to all setups. Non-negotiable framework for capital preservation.",
    rules: [
      "Maximum 1% account risk per trade",
      "No trading during major news events",
      "Daily loss limit: 2% of account",
      "No revenge trading after losses",
    ],
  },
];

export function Playbooks() {
  return (
    <section id="playbooks" className="px-6 py-24 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
            Playbooks
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Structured setups with defined rules. Each playbook is tested, refined, and followed consistently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playbooks.map((playbook) => (
            <Card key={playbook.id} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <playbook.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Playbook {playbook.id}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground">{playbook.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {playbook.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {playbook.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">—</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
