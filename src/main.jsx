import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./auth/AuthContext";
import {AppointmentProvider,} from "./appointments/AppointmentContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppointmentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppointmentProvider>
    </AuthProvider>
  </React.StrictMode>
);