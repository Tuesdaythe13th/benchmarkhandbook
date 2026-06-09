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
import Security from "./pages/Security";
import Jailbreaks from "./pages/Jailbreaks";
import Risk from "./pages/Risk";
import AgenticPrimer from "./pages/AgenticPrimer";
import RubricHandbook from "./pages/RubricHandbook";
import EvalScience from "./pages/EvalScience";
import SiteMapNavigator from "./components/SiteMapNavigator";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/safety"} component={HarmTaxonomy} />
      <Route path={"/security"} component={Security} />
      <Route path={"/jailbreaks"} component={Jailbreaks} />
      <Route path={"/risk"} component={Risk} />
      <Route path={"/multicultural"} component={Multicultural} />
      <Route path={"/rubric-design"} component={RubricDesign} />
      <Route path={"/rubric"} component={RubricHandbook} />
      <Route path={"/agentic"} component={AgenticPrimer} />
      <Route path={"/science"} component={EvalScience} />
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
          <SiteMapNavigator />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
