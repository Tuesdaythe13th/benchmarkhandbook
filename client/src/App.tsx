import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HarmTaxonomy from "./pages/HarmTaxonomy";
import Multicultural from "./pages/Multicultural";
import RubricDesign from "./pages/RubricDesign";
import MetricsGlossary from "./pages/MetricsGlossary";
import MasterDoctrine from "./pages/MasterDoctrine";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/safety"} component={HarmTaxonomy} />
      <Route path={"/multicultural"} component={Multicultural} />
      <Route path={"/rubric-design"} component={RubricDesign} />
      <Route path={"/metrics"} component={MetricsGlossary} />
      <Route path={"/doctrine"} component={MasterDoctrine} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
