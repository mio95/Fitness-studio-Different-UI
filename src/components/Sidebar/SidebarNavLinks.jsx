import {
  FiHome,
  FiBarChart2,
  FiUserPlus,
  FiUser,
  FiLogOut,
  FiPackage,
  FiKey,
  FiCheck,
} from "react-icons/fi";

export const sidebarLinks = [
  { to: "/", text: "Početna", icon: <FiHome /> },
  {
    to: "/statistikaTrenera",
    text: "Statistika trenera",
    icon: <FiBarChart2 />,
  },
  {
    to: "/statistikaVezbaca",
    text: "Statistika vežbača",
    icon: <FiBarChart2 />,
  },
  { to: "/dodajPaket", text: "Dodaj paket", icon: <FiPackage /> },
  { to: "/obrisiPaket", text: "Obriši paket", icon: <FiPackage /> },
  {
    to: "/odobrenjeClanarine",
    text: "Odobrenje članarine",
    icon: <FiCheck />,
  },
  { to: "/dodajClana", text: "Dodaj člana", icon: <FiUserPlus /> },
  { to: "/profil", text: "Profil", icon: <FiUser /> },
  { to: "/promenaLozinke", text: "Promena lozinke", icon: <FiKey /> },
  { to: "/logout", text: "Izloguj se", icon: <FiLogOut /> },
];
