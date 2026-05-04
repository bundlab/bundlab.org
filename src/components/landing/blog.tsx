import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: "blog-post-1",
    category: "Technology",
    title: "The Rise of AI in the Nigerian Tech Ecosystem",
    excerpt: "Exploring how Artificial Intelligence is transforming industries and creating new opportunities in Nigeria.",
    author: { name: "Abdullahi Bundi", imageId: "team-member-1" },
  },
  {
    id: "blog-post-2",
    category: "Development",
    title: "Scaling Your Application with Modern DevOps Practices",
    excerpt: "A deep dive into CI/CD, containerization, and cloud-native strategies for robust applications.",
    author: { name: "Enoch Philip Dibal", imageId: "team-member-2" },
  },
  {
    id: "blog-post-3",
    category: "Product",
    title: "User-Centric Design: The Key to Product Success",
    excerpt: "Learn how putting the user first in your design process leads to products people love.",
    author: { name: "Fatima Bello", imageId: "team-member-3" },
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            From the <span className="text-primary">Bundlab Blog</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with our latest thoughts on technology, product, and innovation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const postImage = PlaceHolderImages.find((img) => img.id === post.id);
            const authorImage = PlaceHolderImages.find((img) => img.id === post.author.imageId);
            return (
              <Card key={post.id} className="flex flex-col overflow-hidden">
                {postImage && (
                  <CardHeader className="p-0">
                    <Link href="#">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full aspect-[3/2] transition-transform duration-300 hover:scale-105"
                        data-ai-hint={postImage.imageHint}
                      />
                    </Link>
                  </CardHeader>
                )}
                <CardContent className="p-6 flex-1">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">
                    <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
                  </CardTitle>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    {authorImage && (
                       <AvatarImage
                         src={authorImage.imageUrl}
                         alt={`Photo of ${post.author.name}`}
                         data-ai-hint={authorImage.imageHint}
                       />
                    )}
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
