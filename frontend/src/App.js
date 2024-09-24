import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Router } from "./routes/Router";
import { ExhibitContextProvider } from "./contexts/ExhibitContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App = () => (
  <>
    <ExhibitContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ExhibitContextProvider>
  </>
);

export default App;
