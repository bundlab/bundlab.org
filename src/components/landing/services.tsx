import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Cloud, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Web & Mobile Development",
    description: "We build beautiful, scalable, and user-friendly web and mobile applications tailored to your business needs using modern technologies.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Cloud & DevOps Solutions",
    description: "Leverage the power of the cloud. We provide cloud infrastructure design, deployment, and management to ensure your applications are reliable and scalable.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI & Machine Learning",
    description: "Integrate intelligence into your business. From chatbots to predictive analytics, we help you unlock the potential of AI to drive growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide end-to-end software solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="p-4 bg-secondary rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
