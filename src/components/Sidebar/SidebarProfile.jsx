import { HiDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../features/user/userSlice";

export default function SidebarProfile({ expanded }) {
  const loggedInUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  dispatch(setSelectedUser(loggedInUser.user));

  const { selectedUser } = useSelector((state) => state.user);

  return (
    <div className="border-t flex p-3">
      <div
        className={`flex justify-between items-center overflow-hidden transition-all ${
          expanded ? "w-full ml-3" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">
            {selectedUser?.firstName} {selectedUser?.lastName}
          </h4>
          <span className="text-xs text-gray-600">{selectedUser.role}</span>
        </div>
        <HiDotsVertical size={20} />
      </div>
    </div>
  );
}
