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
import LogInPage from "./pages/LogInPage.jsx";
import LogOut from "./pages/LogOut.jsx";

//router import
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

//autorization
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistikaTrenera",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <StatistikaTrenera />{" "}
          </RequireAuth>
        ),
      },
      {
        path: "/statistikaVezbaca",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <StatistikaVezbaca />
          </RequireAuth>
        ),
      },
      {
        path: "/dodajPaket",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <DodajNoviPaket />
          </RequireAuth>
        ),
      },
      {
        path: "/obrisiPaket",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <ObrisiPaket />
          </RequireAuth>
        ),
      },
      {
        path: "/odobrenjeClanarine",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <OdobrenjeClanarine />
          </RequireAuth>
        ),
      },
      {
        path: "/dodajClana",
        element: (
          <RequireAuth allowedRoles={["ADMIN"]}>
            <DodajClana />
          </RequireAuth>
        ),
      },
      {
        path: "/profil",
        element: (
          <RequireAuth allowedRoles={["ADMIN", "TRENER", "VEZBAC"]}>
            <Profil />
          </RequireAuth>
        ),
      },
      {
        path: "/promenaLozinke",
        element: (
          <RequireAuth allowedRoles={["ADMIN", "TRENER", "VEZBAC"]}>
            <PromenaLozinke />
          </RequireAuth>
        ),
      },
      {
        path: "/logout",
        element: (
          <RequireAuth allowedRoles={["ADMIN", "TRENER", "VEZBAC"]}>
            <LogOut />
          </RequireAuth>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
