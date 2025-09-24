import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

export default function SidebarProfile({ expanded }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="border-t flex p-3">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt="User"
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`flex justify-between items-center overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">{user.username}</h4>
          <span className="text-xs text-gray-600">{user.email}</span>
        </div>
        <HiDotsVertical size={20} />
      </div>
    </div>
  );
}
