import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BarChart3, BookText, LineChart, Layers } from "lucide-react";

const tools = [
  {
    name: "TradeZella",
    category: "Journaling",
    icon: BookText,
    description: "Comprehensive trade journaling platform. Automatic import, detailed analytics, and pattern recognition to identify strengths and weaknesses.",
    link: "https://tradezella.com",
  },
  {
    name: "TradingView",
    category: "Charting",
    icon: LineChart,
    description: "Professional charting platform with powerful technical analysis tools. Used for pre-market analysis, level identification, and trade planning.",
    link: "https://tradingview.com",
  },
  {
    name: "Bookmap",
    category: "Order Flow",
    icon: Layers,
    description: "Visualization of order book depth and historical liquidity. Essential for understanding market microstructure and identifying key levels.",
    link: "https://bookmap.com",
  },
  {
    name: "Edgewonk",
    category: "Analytics",
    icon: BarChart3,
    description: "Statistical analysis of trading performance. Helps identify which setups, times, and conditions yield the best results over time.",
    link: "https://edgewonk.com",
  },
];

export function Tools() {
  return (
    <section id="tools" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
            Tools
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A curated list of tools that support the trading process. Each serves a specific purpose in the workflow.
        </p>
        
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
  );
}
