
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Garden from "./pages/Garden";
import Medicines from "./pages/Medicines";
import PlantIdentification from "./pages/PlantIdentification";
import DiseaseIdentification from "./pages/DiseaseIdentification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/plant-identification" element={<PlantIdentification />} />
          <Route path="/disease-identification" element={<DiseaseIdentification />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
