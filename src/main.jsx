import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//pages
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import StatistikaTrenera from "./pages/StatistikaTrenera.jsx";
import StatistikaVezbaca from "./pages/StatistikaVezbaca.jsx";
import DodajNoviPaket from "./pages/DodajNoviPaket.jsx";
import ObrisiPaket from "./pages/ObrisiPaket.jsx";
import OdobrenjeClanarine from "./pages/OdobrenjeClanarine.jsx";
import DodajClana from "./pages/DodajClana.jsx";
import Profil from "./pages/Profil.jsx";
import PromenaLozinke from "./pages/PromenaLozinke.jsx";
import LogOut from "./pages/LogOut.jsx";

//router import
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistikaTrenera",
        element: <StatistikaTrenera />,
      },
      {
        path: "statistikaVezbaca",
        element: <StatistikaVezbaca />,
      },
      { path: "dodajPaket", element: <DodajNoviPaket /> },
      { path: "obrisiPaket", element: <ObrisiPaket /> },
      { path: "odobrenjeClanarine", element: <OdobrenjeClanarine /> },
      { path: "dodajClana", element: <DodajClana /> },
      { path: "profil", element: <Profil /> },
      { path: "promenaLozinke", element: <PromenaLozinke /> },
      { path: "logout", element: <LogOut /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
