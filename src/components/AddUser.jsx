import { Link } from "react-router-dom";
import swal from "sweetalert";
import { HiOutlineArrowLeft } from "react-icons/hi";

const AddUser = () => {
  const handleAddUserform = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const user = { name, email, gender, status };

    fetch("https://management-user-server.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("User Added!", "You added the user successfully", "success");
          form.reset();
        }
      });
  };

  return (
    <section className="max-w-2xl mx-auto px-4 flex justify-center items-center w-full min-h-screen">
      <div className="w-full">
        <Link to="/" className="link mb-16 text-lg flex items-center gap-2  font-medium">
          <HiOutlineArrowLeft />
          <span>All Users</span>
        </Link>
        <header className="text-center mx-auto py-6 space-y-2">
          <h2 className="font-bold text-2xl">New User</h2>
          <p>User the below form to create a new account</p>
        </header>

        <form onSubmit={handleAddUserform} className="mt-5 w-full">
          <div>
            <label className="label">
              <strong className="label-text">Name </strong>
            </label>
            <input
              type="text"
              name="name"
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
              placeholder="Enter your email"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="flex items-center gap-10 pt-4">
            <strong>Gender</strong>
            <label className="flex items-center gap-2" htmlFor="">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="radio"
                defaultChecked
              />
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="Female"
                className="radio"
              />
              <span>Female</span>
            </label>
          </div>

          <div className="flex items-center gap-10 pt-4">
            <strong>Status</strong>
            <label className="flex items-center gap-2" htmlFor="">
              <input
                type="radio"
                name="status"
                value="Active"
                className="radio"
                defaultChecked
              />
              <span>Active</span>
            </label>
            <label className="flex items-center gap-2" htmlFor="">
              <input
                type="radio"
                name="status"
                value="Inactive"
                className="radio"
              />
              <span>Inactive</span>
            </label>
          </div>
          <div className="mt-6">
            <button className="btn w-full rounded-none   bg-green-300">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUser;
