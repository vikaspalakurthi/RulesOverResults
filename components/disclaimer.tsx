import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="px-6 py-16 border-t border-border bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
          <AlertTriangle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground">Disclaimer</p>
            <p>
              The content on this website is for educational and informational purposes only. 
              Nothing presented here constitutes financial advice, investment recommendations, 
              or trading signals.
            </p>
            <p>
              Trading futures, options, and other financial instruments involves substantial risk 
              and is not suitable for all investors. Past performance does not guarantee future 
              results. You could lose some or all of your investment.
            </p>
            <p>
              This is a personal trading journal documenting one individual&apos;s journey. 
              Always do your own research and consult with a qualified financial advisor before 
              making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
