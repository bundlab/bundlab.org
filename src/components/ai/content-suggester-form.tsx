"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestBlogContent, type SuggestBlogContentOutput } from '@/ai/flows/suggest-blog-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  bundlabServices: z.string().min(10, 'Please describe Bundlab services.'),
  brandingGuidelines: z.string().min(10, 'Please provide branding guidelines.'),
  industryTrends: z.string().min(10, 'Please list some industry trends.'),
  tone: z.string({ required_error: 'Please select a tone.' }),
  topic: z.string().min(3, 'Please provide a topic.'),
});

export function ContentSuggesterForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestBlogContentOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bundlabServices: "Web & Mobile App Development, Cloud & DevOps Solutions, AI & Machine Learning Integration.",
      brandingGuidelines: "Nigeria-first, global-ready. Modern, innovative, and professional. Green and white color scheme. Font: Inter.",
      industryTrends: "AI adoption in Africa, fintech growth, mobile-first solutions, remote work technologies.",
      topic: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await suggestBlogContent(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate content suggestions. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="bundlabServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bundlab Services</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="Describe Bundlab's core services..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brandingGuidelines"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branding Guidelines</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="e.g., Tone, voice, color palette..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Trends</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="e.g., AI in fintech, sustainable tech..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Post Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'The Future of Mobile Apps in Nigeria'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Tone</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="witty">Witty</SelectItem>
                        <SelectItem value="inspirational">Inspirational</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <Button type="submit" disabled={loading} className="w-full md:w-auto">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Suggestions
          </Button>
        </form>
      </Form>

      {(loading || result) && (
        <div className="mt-12">
          <Separator />
          <h3 className="text-2xl font-bold text-center my-8">
            AI Suggestions
          </h3>
          {loading && (
             <div className="space-y-4">
                <div className="w-full h-8 bg-muted rounded-md animate-pulse"></div>
                <div className="w-full h-24 bg-muted rounded-md animate-pulse"></div>
             </div>
          )}
          {result && (
            <Card className="animate-in fade-in-20">
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
                <CardDescription>Suggested blog post title</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Content Ideas:</h4>
                <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap">
                  {result.contentIdeas}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
