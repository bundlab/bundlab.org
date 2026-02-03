import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    id: "team-member-1",
    name: "Adaobi Okoro",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for building tech that solves real-world problems in Africa.",
  },
  {
    id: "team-member-2",
    name: "Chinedu Eze",
    role: "Lead Software Engineer",
    bio: "Expert architect of robust and scalable systems. Loves clean code and a good challenge.",
  },
  {
    id: "team-member-3",
    name: "Fatima Bello",
    role: "Head of Product",
    bio: "Drives product strategy with a user-centric approach, turning complex ideas into elegant solutions.",
  },
  {
    id: "team-member-4",
    name: "Emeka Nwosu",
    role: "AI/ML Specialist",
    bio: "Brings data to life, building intelligent systems that power next-generation applications.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Meet the <span className="text-primary">Innovators</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The passionate minds behind Bundlab, dedicated to excellence and innovation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
            return (
              <Card key={member.name} className="text-center overflow-hidden">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    {memberImage && (
                      <AvatarImage
                        src={memberImage.imageUrl}
                        alt={`Photo of ${member.name}`}
                        data-ai-hint={memberImage.imageHint}
                      />
                    )}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
