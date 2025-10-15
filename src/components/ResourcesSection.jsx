
export const ResourcesSection = () => {
  return (
    <section
      id="resources"
      className="relative py-24 px-6 md:px-16 bg-secondary/30 text-foreground"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Resources & Support
        </h2>

        <p className="text-lg md:text-xl text-foreground/80 mb-12">
          If you or someone you know is experiencing domestic violence,
          help is available. These organizations provide free and confidential
          support, 24/7.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* National */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">
              National Domestic Violence Hotline (U.S.)
            </h3>
            <p className="text-foreground/80 mb-3">
              Call <strong>1-800-799-SAFE (7233)</strong> or text <strong>“START”</strong> to 88788.
              Available 24/7 for confidential support and resources.
            </p>
            <a
              href="https://www.thehotline.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit thehotline.org →
            </a>
          </div>

          {/* Global */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">
              UN Women Global Database
            </h3>
            <p className="text-foreground/80 mb-3">
              Information on global efforts to end violence against women and
              contact links for local support organizations.
            </p>
            <a
              href="https://www.unwomen.org/en/what-we-do/ending-violence-against-women"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit UN Women →
            </a>
          </div>

          {/* Florida / U.S. example (local resource) */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Florida Domestic Violence Hotline
            </h3>
            <p className="text-foreground/80 mb-3">
              Connects survivors to local shelters, advocacy, and legal resources across Florida.
              Available 24 hours a day.
            </p>
            <a
              href="https://www.myflfamilies.com/services/abuse/domestic-violence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit fcadv.org →
            </a>
          </div>

          {/* Additional resource */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Women’s Aid (UK)
            </h3>
            <p className="text-foreground/80 mb-3">
              Offering online chat and confidential helpline services for
              domestic abuse survivors in the United Kingdom.
            </p>
            <a
              href="https://www.womensaid.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit womensaid.org.uk →
            </a>
          </div>
        </div>

        <p className="text-sm text-foreground/60 mt-12">
          If you’re in immediate danger, please contact local emergency services.
        </p>
      </div>
    </section>
  );
};
