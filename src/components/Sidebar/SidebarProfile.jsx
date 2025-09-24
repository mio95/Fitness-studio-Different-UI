import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

export default function SidebarProfile({ expanded }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="border-t flex p-3">
      <div
        className={`flex justify-between items-center overflow-hidden transition-all ${
          expanded ? "w-full ml-3" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">
            {user.firstName} {user.lastName}
          </h4>
          <span className="text-xs text-gray-600">{user.role}</span>
        </div>
        <HiDotsVertical size={20} />
      </div>
    </div>
  );
}
