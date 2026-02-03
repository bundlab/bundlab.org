import { ContentSuggesterForm } from '@/components/ai/content-suggester-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AiContentSuggesterPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary font-headline lg:text-5xl">
          AI Content Suggester
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Power your content strategy with AI. Generate compelling blog titles and ideas that align with Bundlab&apos;s brand and industry trends.
        </p>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Content Generation Engine</CardTitle>
          <CardDescription>Fill in the details below to get AI-powered content suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContentSuggesterForm />
        </CardContent>
      </Card>
    </div>
  );
}
