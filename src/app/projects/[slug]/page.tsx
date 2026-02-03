import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/projects" className="flex items-center gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={800}
            className="object-cover w-full rounded-lg shadow-lg aspect-[4/3]"
            data-ai-hint={project.imageHint}
          />
        </div>
        <div className="md:col-span-2 flex flex-col justify-center">
          <Badge variant="secondary" className="w-fit mb-4">{project.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{project.shortDescription}</p>
          
          <div className="prose prose-lg max-w-none text-foreground mb-6">
            <p>{project.longDescription}</p>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="text-xl font-semibold">Project Info</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Category:</strong> {project.category}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
