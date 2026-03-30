export function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">Arvik Strategies</span> is a personal trading journey 
            focused on discipline, journaling, and continuous learning. This is not a signal service, 
            trading room, or get-rich-quick scheme.
          </p>
          
          <p>
            The core belief here is simple: consistent process leads to consistent results. 
            By documenting every trade, analyzing patterns in behavior, and refining systems over time, 
            we build the foundation for sustainable trading.
          </p>
          
          <p>
            Every entry in this journal represents a lesson learned, a rule followed or broken, 
            and an opportunity to improve. The goal is not perfection—it&apos;s progress.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary mb-2">Process</p>
            <p className="text-muted-foreground text-sm">Over outcomes</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary mb-2">Discipline</p>
            <p className="text-muted-foreground text-sm">Over impulse</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary mb-2">Learning</p>
            <p className="text-muted-foreground text-sm">Over ego</p>
          </div>
        </div>
      </div>
    </section>
  );
}
