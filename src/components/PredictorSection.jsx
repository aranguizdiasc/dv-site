import React, { useState } from "react";

export const PredictorSection = () => {
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    employment_status: "",
    income: "",
    marital_status: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormComplete =
    formData.age &&
    formData.education &&
    formData.employment_status &&
    formData.income &&
    formData.marital_status;
  
  const API_URL = "https://dv-backend-vrdy.onrender.com/predict"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Prediction request failed");

      const data = await response.json();

      // short "thinking" delay for better UX
      setTimeout(() => {
        setResult(data);
        setLoading(false);
      }, 1200);
    } catch (err) {
      console.error(err);
      alert("Error connecting to the prediction server.");
      setLoading(false);
    }
  };

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
            This machine learning model was trained on global survey data related to domestic violence. It analyzes key social and economic
            factors such as <strong>age, education level, income, and employment status</strong> to estimate the likelihood that an
            individual may experience domestic violence.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            The goal of this project is not to label individuals but to identify patterns that can help inform awareness, prevention, and
            early intervention efforts.
          </p>
        </div>

        {/* Right side: Input form */}
        <div className="bg-card rounded-xl shadow-md p-8 card-hover">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
            Try the Predictor
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1 text-left">Age</label>
              <input
                name="age"
                type="number"
                min="0"
                max="120"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-left">Education Level</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full rounded-md border border-border px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              >
                <option value="" disabled>
                  Select education level
                  </option>
                <option value="none">None</option>
                <option value="primary">Primary (elementary)</option>
                <option value="secondary">Secondary (high school)</option>
                <option value="tertiary">Tertiary (college and beyond)</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-left">Employment Status</label>
              <select
                name="employment_status"
                value={formData.employment_status}
                onChange={handleChange}
                className="w-full rounded-md border border-border px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              >
                <option value="" disabled>
                  Select employment status
                </option>
                <option value="unemployed">Unemployed</option>
                <option value="part time employed">Part-Time Employed</option>
                <option value="full time employed">Full-Time Employed</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-left">Monthly Income (USD)</label>
              <input
                name="income"
                type="number"
                min="0"
                value={formData.income}
                onChange={handleChange}
                placeholder="Enter income"
                className="w-full rounded-md border border-border px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-left">Marital Status</label>
              <select
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
                className="w-full rounded-md border border-border px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              >
                <option value="" disabled>
                  Select marital status
                </option>
                <option value="unmarried">Unmarried</option>
                <option value="married">Married</option>
              </select>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={!isFormComplete || loading}
              className={`w-full mt-4 rounded-md py-3 font-semibold text-white transition-all duration-300 ${
                !isFormComplete || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              }`}
            >
              {loading ? "Predicting..." : "Predict Risk"}
            </button>
          </form>

          {/* Result Display */}
          {!loading && result && (
            <div className="mt-8 text-center animate-fade-in">
              <h4 className="text-xl font-semibold text-primary mb-2">Risk Level: {result.risk_level}</h4>
              <p className="text-lg text-foreground/80">Probability: {result.probability}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

