import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);
