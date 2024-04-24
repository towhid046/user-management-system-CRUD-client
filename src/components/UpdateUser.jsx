import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email, gender, status } = user;

  const handleUpdateUserForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const updateUser = { name, email, gender, status };

    fetch(`https://management-user-server.vercel.app/update-user/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("User Updated!", "You Update the user successfully", "success");
        }
      });
  };

  return (
    <section className="max-w-2xl mx-auto px-4 flex justify-center items-center w-full min-h-screen">
      <div className="w-full">
        <Link to="/" className="link link-primary mb-16 text-lg font-medium">
          All Users
        </Link>
        <header className="text-center mx-auto py-6 space-y-2">
          <h2 className="font-bold text-2xl">Update User</h2>
          <p>User the below form to create a new account</p>
        </header>
        <form onSubmit={handleUpdateUserForm} className="mt-5 w-full">
          <div>
            <label className="label">
              <strong className="label-text">Name </strong>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name || ""}
              placeholder="Enter your Name"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Email </strong>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email || ""}
              placeholder="Enter your email"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="flex items-center gap-10 pt-4">
            <strong>Gender</strong>
            <label className="flex items-center gap-2" htmlFor="">
              {gender === "Male" ? (
                <input
                  type="radio"
                  name="gender"
                  className="radio"
                  defaultChecked
                  value={"Male"}
                />
              ) : (
                <input
                  type="radio"
                  value={"Male"}
                  name="gender"
                  className="radio"
                />
              )}
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2" htmlFor="">
              {gender === "Female" ? (
                <input
                  type="radio"
                  defaultChecked
                  name="gender"
                  className="radio"
                  value={"Female"}
                />
              ) : (
                <input
                  type="radio"
                  value={"Female"}
                  name="gender"
                  className="radio"
                />
              )}
              <span>Female</span>
            </label>
          </div>

          <div className="flex items-center gap-10 pt-4">
            <strong>Status</strong>
            <label className="flex items-center gap-2" htmlFor="">
              {status === "Active" ? (
                <input
                  type="radio"
                  name="status"
                  className="radio"
                  defaultChecked
                  value={"Active"}
                />
              ) : (
                <input
                  type="radio"
                  value={"Active"}
                  name="status"
                  className="radio"
                />
              )}
              <span>Active</span>
            </label>
            <label className="flex items-center gap-2" htmlFor="">
              {status === "Inactive" ? (
                <input
                  type="radio"
                  name="status"
                  defaultChecked
                  className="radio"
                  value={"Inactive"}
                />
              ) : (
                <input
                  type="radio"
                  value={"Inactive"}
                  name="status"
                  className="radio"
                />
              )}
              <span>Inactive</span>
            </label>
          </div>
          <div className="mt-6">
            <button className="btn w-full rounded-none bg-green-300">
              Update User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
