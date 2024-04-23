import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/ContextProvider";
import swal from "sweetalert";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, photoUrl, email };

    fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          createUser(email, password)
            .then((user) => {
              swal(
                "Registered!",
                "Your Account Registered Successfully",
                "success"
              );
              form.reset();
            })
            .catch((err) => console.error(err));
        }
      });
  };

  return (
    <div>
      <div className="w-full px-4">
        <div className="max-w-xl bg-base-100 mx-auto p-12">
          <h1 className="text-2xl font-bold text-center mb-8">
            Sign Up your account
          </h1>
          <hr />
          <form onSubmit={handleCreateUser} className="mt-5">
            <div>
              <label className="label">
                <strong className="label-text">Your Name</strong>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
            <div>
              <label className="label">
                <strong className="label-text">Photo URL</strong>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your photo url"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
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
            <div className="flex items-center gap-1 mt-6">
              <input
                type="checkbox"
                id="terms-contition"
                className="checkbox checkbox-sm rounded"
              />
              <label htmlFor="terms-contition" className="cursor-pointer">
                <span>Accept Term & Conditions</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              to={"/sign-in"}
              className=" cursor-pointer text-red-400 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
