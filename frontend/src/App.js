import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Router } from "./routes/Router";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);

export default App;
