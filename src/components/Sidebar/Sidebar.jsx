import { useState } from "react";
import SidebarContext from "./SidebarContext";
import SidebarToggle from "./SidebarToggle";
import SidebarProfile from "./SidebarProfile";
import SidebarItem from "./SidebarItem";
import { sidebarLinks } from "./SidebarNavLinks";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <SidebarToggle expanded={expanded} setExpanded={setExpanded} />

          <ul className="flex-1 px-3">
            {sidebarLinks.map(({ to, text, icon }) => (
              <NavLink key={to} to={to}>
                {({ isActive }) => (
                  <SidebarItem icon={icon} text={text} active={isActive} />
                )}
              </NavLink>
            ))}
          </ul>

          <SidebarProfile expanded={expanded} />
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
