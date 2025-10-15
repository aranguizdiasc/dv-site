import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Linkedin } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact"
        className="relative py-24 px-4 md:px-16 bg-secondary/30 "> 
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Connect With Me
          </h2>
        </div>

        <div className="flex items-center justify-center space-x-3 mb-12">
            <Linkedin className="h-6 w-6 text-primary" />
                <a
                    href="https://www.linkedin.com/in/carolinaaranguizdias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl text-muted-foreground hover:text-primary hover:underline transition-all font-normal"
                >
                    Carolina Aránguiz Dias
                </a>
        </div>

        <div className="flex items-center justify-center space-x-3 mb-12">
            <Mail className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold md:text-xl text-foreground/80">
                <a
                className="ml-2 font-normal text-muted-foreground hover:text-primary"
                href="mailto:carolinaranguizz@gmail.com"
                >
                carolinaranguizz@gmail.com
                </a>
            </p>
        </div>

        <div className="flex items-center justify-center space-x-3">
            <MapPin className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold md:text-xl text-foreground/80">
                <a
                className="ml-2 font-normal text-muted-foreground">
                Gainesville, Florida
                </a>
            </p>
        </div>

      </section>
    );
}