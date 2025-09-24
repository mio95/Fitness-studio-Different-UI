import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(res)) {
      navigate("/");
    } else {
      toast.error("Greska pri prijavi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex justify-center items-center w-[40%] gap-10">
          <div>
            <p>Logo</p>
          </div>
          <div>
            <h2 className="text-xl mb-4 ">Prijava:</h2>

            <p>Username</p>
            <input
              type="text"
              name="username"
              placeholder="Unesite username/e-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Unesite pasword"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-10"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {
              error && <ToastContainer />
              // <p className="text-red-500">{error}</p>
            }
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogInPage;
