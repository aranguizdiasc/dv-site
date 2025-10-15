

export const PredictorSection = () => {
  return (
    <section
      id="predictor"
      className="relative py-24 px-6 md:px-16 bg-secondary/30 text-foreground"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left side: Model description */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Understanding the Model
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            This machine learning model was trained on global survey data
            related to domestic violence. It analyzes key social and economic
            factors such as <strong>age, education level, income, and
            employment status</strong> to estimate the likelihood that an
            individual may experience domestic violence.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            The goal of this project is not to label individuals but to
            identify patterns that can help inform awareness, prevention, and
            early intervention efforts.
          </p>
        </div>

        {/* Right side: Input form */}
        <div className="bg-card rounded-xl shadow-md p-8 card-hover">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
            Try the Predictor
          </h3>
          <form className="space-y-4">
            {/* Inputs */}
            <div>
              <label className="block font-medium text-400 mb-1 text-left">
                Age
              </label>
              <input
                type="number"
                min="0"
                max="120"
                placeholder="Enter age"
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block font-medium text-400 mb-1 text-left">
                Education Level
              </label>
              <select
                defaultValue=""
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="" disabled>
                  Select education level
                </option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="tertiary">Tertiary</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-400 mb-1 text-left">
                Monthly Income (USD)
              </label>
              <input
                type="number"
                min="0"
                placeholder="Enter income"
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block font-medium text-400 mb-1 text-left">
                Employment Status
              </label>

              <select
                defaultValue=""
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="" disabled>
                  Select employment status
                </option>
                <option value="employed">Unemployed</option>
                <option value="unemployed">Semi-Employed</option>
                <option value="self-employed">Employed</option>
              </select>
            </div>


            {/* Submit button */}
            <button
              type="submit"
              className="my-buttons w-full mt-4"
            >
              Predict Risk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
