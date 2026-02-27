import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppShell from "./components/AppShell";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Booking from "./pages/Booking";
import SeatSelection from "./pages/SeatSelection";
import MyPage from "./pages/MyPage";

function Router() {
  return (
    <AppShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/booking/:movieId" component={Booking} />
        <Route path="/seats/:movieId/:showtimeId" component={SeatSelection} />
        <Route path="/mypage" component={MyPage} />
        <Route>
          <div className="flex flex-col items-center justify-center min-h-screen text-gray-400">
            <p className="text-6xl font-bold text-gray-200">404</p>
            <p className="mt-2 text-lg">페이지를 찾을 수 없습니다</p>
          </div>
        </Route>
      </Switch>
    </AppShell>
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
