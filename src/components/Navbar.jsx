import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOutCircle } from "react-icons/bi";
const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const isUserLoggedIn = isAuthenticated && user;
  return (
    <nav className="h-20 sticky bg-white">
      <div className="h-full align-content-center flex justify-center items-center gap-x-4">
        {isUserLoggedIn && (
          <>
            <img
              src={user.picture}
              alt={user.name}
              className="w-10 h-10 object-cover rounded-full"
            />
            <h2 className="font-content">
              Welcome, <strong>{user.name}</strong>
            </h2>
          </>
        )}
        <button
          className="flex items-center gap-x-2 font-content border-2 border-red-500 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black duration-100"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <BiLogOutCircle />
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
