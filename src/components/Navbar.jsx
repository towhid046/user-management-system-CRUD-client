import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/ContextProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const handleUserLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "Want to Log out!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        logOut()
          .then((result) => {
            swal("Log out Success");
          })
          .catch((err) => {
            swal("Log Out Failed");
          });
      }
    });
  };

  return (
    <nav className="flex justify-between gap-4 px-4 py-2">
      <div>
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          <h2 className="text-2xl font-bold btn btn-ghost">{user?.email}</h2>
        )}
      </div>
      <ul className="flex items-center gap-3">
        <NavLink to={"/"} className="link link-primary">
          All Users
        </NavLink>
        {user ? (
          <button
            onClick={handleUserLogOut}
            className="btn bg-black text-white hover:bg-gray-800"
          >
            Log Out
          </button>
        ) : (
          <>
            <NavLink to={"/sign-up"} className="link link-primary">
              Sign Up
            </NavLink>
            <NavLink to={"sign-in"} className="link link-primary">
              Sign in
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
