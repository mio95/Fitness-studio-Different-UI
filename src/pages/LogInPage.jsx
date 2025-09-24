import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authThunks";
// import { Navigate } from "react-router";

function LogInPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    dispatch(loginUser({ username, password }));

    // Navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Prijava</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex justify-center items-center w-[40%] gap-10">
          <div>
            <p>Logo</p>
          </div>
          <div>
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
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogInPage;
