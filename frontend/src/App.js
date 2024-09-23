import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Router } from "./routes/Router";

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </>
);

export default App;
