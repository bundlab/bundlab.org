import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Check out some of our recent work. We take pride in delivering high-quality solutions that drive success for our clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <p className="mt-2 text-muted-foreground line-clamp-3">{project.shortDescription}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Link href={`/projects/${project.slug}`} className="font-semibold text-primary hover:underline">Read More</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
