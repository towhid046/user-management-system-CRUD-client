import { Link, useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";
import { MdOutlinePersonAdd } from "react-icons/md";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  return (
    <section className=" px-4 flex justify-center items-center min-h-screen">
      <div className="space-y-6">
        <Link to={"/add-user"} className="flex items-center gap-2">
          <button className="btn bg-white border text-purple-400 text-base shadow-none hover:border-green-300 hover:bg-green-300 hover:text-white">
            <span>New User</span>
            <MdOutlinePersonAdd className="text-xl" />
          </button>
        </Link>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-black text-white ">
              <tr className="text-center">
                <th>ID</th>
                <th>Name</th>
                <th>@Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User
                  setUsers={setUsers}
                  users={users}
                  key={user._id}
                  user={user}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users;
