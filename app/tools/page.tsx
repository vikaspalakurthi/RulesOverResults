import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookText, BookOpen, LineChart, Wallet } from "lucide-react";

const tools = [
  {
    name: "TradeZella Shared Journal",
    category: "Journal",
    icon: BookOpen,
    description: "Access the public Tradezella journal where daily entries are synced and available for review.",
    link: "https://app.tradezella.com/shared/c4089882/trade/a5106b5f",
  },
  {
    name: "TradeZella",
    category: "Journaling",
    icon: BookText,
    description: "Comprehensive trade journaling platform. Automatic import, detailed analytics, and pattern recognition to identify strengths and weaknesses.",
    link: "https://bit.ly/tradezella-arvik",
  },
  {
    name: "TradingView",
    category: "Charting",
    icon: LineChart,
    description: "Professional charting platform with powerful technical analysis tools. Used for pre-market analysis, level identification, and trade planning.",
    link: "https://bit.ly/tradingview-arvik",
  },
  {
    name: "Robinhood",
    category: "Brokerage",
    icon: Wallet,
    description: "Commission-free trading platform for stocks, ETFs, and options. Simple interface with instant deposits and easy account setup for beginners.",
    link: "https://join.robinhood.com/vikasp19",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-foreground mb-4">Tools</h1>
              <p className="text-muted-foreground max-w-2xl">
                A curated list of tools that support the trading process. Each serves a specific purpose in the workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <Card key={tool.name} className="bg-card border-border group hover:border-primary/30 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <tool.icon className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                          <p className="text-xs text-muted-foreground">{tool.category}</p>
                        </div>
                      </div>
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label={`Visit ${tool.name}`}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
