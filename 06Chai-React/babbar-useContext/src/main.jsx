import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterContext } from "./context/CounterContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContext.Provider>
      <App />
    </CounterContext.Provider>
  </StrictMode>
);
