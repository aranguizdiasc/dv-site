import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";
import { Home } from "@/pages/Home";
import { PredictorSection } from "@/components/PredictorSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route index element={<PredictorSection />} />
          <Route index element={<ResourcesSection />} />
          <Route index element={<ContactSection />} />
          <Route path ="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
