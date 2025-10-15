import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PredictorSection } from "@/components/PredictorSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <PredictorSection />
            <ResourcesSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />


    </div>);
}