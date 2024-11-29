import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // React Query import
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// QueryClient 생성
const queryClient = new QueryClient(); // React Query의 클라이언트 생성

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* QueryClientProvider로 App을 감싸서 React Query 사용 가능 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
