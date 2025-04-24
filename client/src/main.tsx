import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ScrollToTop />
  </>
);
