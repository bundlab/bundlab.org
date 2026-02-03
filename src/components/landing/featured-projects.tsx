import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <section id="featured-projects" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into our portfolio of innovative solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full aspect-[3/2] transition-transform duration-300 hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <CardTitle className="text-xl">
                  <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">{project.title}</Link>
                </CardTitle>
                <p className="mt-2 text-muted-foreground line-clamp-2">{project.shortDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
