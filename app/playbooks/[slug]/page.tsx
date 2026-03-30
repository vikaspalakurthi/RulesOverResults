import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaybookBySlug, getAllPlaybookSlugs } from "@/lib/playbooks-data";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllPlaybookSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PlaybookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <article className="px-6 py-24">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/playbooks" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Playbooks
            </Link>

            {/* Header */}
            <header className="mb-12">
              <span className="text-xs font-medium text-primary mb-2 block">
                Playbook {playbook.id}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                {playbook.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {playbook.objective}
              </p>
            </header>

            {/* Sections */}
            <div className="space-y-6">
              {playbook.sections.map((section, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* My Rule */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">
                    My Rule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {playbook.myRule}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
