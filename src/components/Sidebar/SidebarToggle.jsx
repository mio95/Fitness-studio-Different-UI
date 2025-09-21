import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

export default function SidebarToggle({ expanded, setExpanded }) {
  return (
    <div className="p-4 pb-2 flex justify-between items-center">
      <img
        src="/logo.jpeg" // <-- OVDE!
        className={`overflow-hidden transition-all ${
          expanded ? "w-32" : "w-0"
        }`}
        alt="Logo"
      />

      <button
        onClick={() => setExpanded((curr) => !curr)}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
      >
        {expanded ? <HiChevronDoubleLeft /> : <HiChevronDoubleRight />}
      </button>
    </div>
  );
}
