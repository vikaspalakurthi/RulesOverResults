import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { playbooks } from "@/lib/playbooks-data";
import { ChevronRight } from "lucide-react";

export default function PlaybooksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-foreground mb-4">Playbooks</h1>
              <p className="text-muted-foreground max-w-2xl">
                Structured setups with defined rules. Each playbook is tested, refined, and followed consistently.
              </p>
            </div>
            
            <div className="space-y-4">
              {playbooks.map((playbook) => (
                <Link key={playbook.id} href={`/playbooks/${playbook.slug}`}>
                  <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-300 cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-medium text-primary mb-1 block">
                            Playbook {playbook.id}
                          </span>
                          <CardTitle className="text-xl text-foreground">{playbook.name}</CardTitle>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {playbook.objective}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
