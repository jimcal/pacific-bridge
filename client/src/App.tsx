import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Opportunities from "./pages/Opportunities";
import Strategies from "./pages/Strategies";
import Conclusion from "./pages/Conclusion";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/trends" component={Trends} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/strategies" component={Strategies} />
      <Route path="/conclusion" component={Conclusion} />
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
