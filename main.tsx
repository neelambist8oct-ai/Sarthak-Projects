import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

console.log("Main.tsx is executing!");
// alert("Main.tsx is executing!"); // Use alert to be 100% sure if checking console is hard for user

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
