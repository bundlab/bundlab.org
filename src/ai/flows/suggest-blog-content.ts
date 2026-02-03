'use server';

/**
 * @fileOverview A blog content suggestion AI agent.
 *
 * - suggestBlogContent - A function that suggests blog content based on Bundlab's services, branding guidelines, and industry trends.
 * - SuggestBlogContentInput - The input type for the suggestBlogContent function.
 * - SuggestBlogContentOutput - The return type for the suggestBlogContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogContentInputSchema = z.object({
  bundlabServices: z
    .string()
    .describe('A description of Bundlab services.'),
  brandingGuidelines: z
    .string()
    .describe('Bundlab branding guidelines to adhere to.'),
  industryTrends: z
    .string()
    .describe('Current industry trends relevant to Bundlab.'),
  tone: z
    .string()
    .default('professional')
    .describe('The desired tone of the blog content.'),
  topic: z.string().describe('The specific topic for the blog content.'),
});
export type SuggestBlogContentInput = z.infer<typeof SuggestBlogContentInputSchema>;

const SuggestBlogContentOutputSchema = z.object({
  title: z.string().describe('The suggested title for the blog content.'),
  contentIdeas: z.string().describe('Suggested content ideas for the blog post.'),
});
export type SuggestBlogContentOutput = z.infer<typeof SuggestBlogContentOutputSchema>;

export async function suggestBlogContent(input: SuggestBlogContentInput): Promise<SuggestBlogContentOutput> {
  return suggestBlogContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogContentPrompt',
  input: {schema: SuggestBlogContentInputSchema},
  output: {schema: SuggestBlogContentOutputSchema},
  prompt: `You are an AI assistant helping a marketing team generate blog content ideas for Bundlab, a modern software company.

  Bundlab Services: {{{bundlabServices}}}
  Branding Guidelines: {{{brandingGuidelines}}}
  Industry Trends: {{{industryTrends}}}
  Topic: {{{topic}}}
  Tone: {{{tone}}}

  Suggest a blog post title and content ideas based on the provided information. Ensure the suggestions align with Bundlab's brand and are relevant to current industry trends.`,
});

const suggestBlogContentFlow = ai.defineFlow(
  {
    name: 'suggestBlogContentFlow',
    inputSchema: SuggestBlogContentInputSchema,
    outputSchema: SuggestBlogContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
