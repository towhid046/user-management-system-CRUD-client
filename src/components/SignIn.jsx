import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/ContextProvider";
import swal from "sweetalert";

const SignIn = () => {
  const { loginUser } = useContext(AuthContext);

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const lastLogAt = result.user.metadata.lastSignInTime;
        const user = { email, lastLogAt };

        fetch("http://localhost:5000/customers", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            swal(
              "Success",
              "You have successfully login your account",
              "success"
            );
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="w-full px-4">
        <div className="max-w-xl bg-base-100 mx-auto p-12">
          <h1 className="text-2xl font-bold text-center mb-8">
            Log in your account
          </h1>
          <hr />
          <form onSubmit={handleUserLogin} className="mt-5">
            <div>
              <label className="label">
                <strong className="label-text">Email</strong>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
            <div>
              <label className="label">
                <strong className="label-text">Password</strong>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                Log In
              </button>
            </div>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              to={"/sign-up"}
              className=" cursor-pointer text-red-400 font-semibold"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
