import React from "react";
//router
import { useNavigation } from "react-router";
import { Outlet } from "react-router";
//pages
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/Sidebar/SidebarItem";

import { FiHome, FiSettings } from "react-icons/fi";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      {/* <Sidebar /> */}
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<FiHome />} text="Home" active />
          <SidebarItem icon={<FiSettings />} text="Settings" alert />
        </Sidebar>

        {/* Renderuje decu */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
