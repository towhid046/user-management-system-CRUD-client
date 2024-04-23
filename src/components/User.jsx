import { Link } from "react-router-dom";
import swal from "sweetalert";
import PropTypes, { object } from "prop-types";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

const User = ({ user, users, setUsers, index }) => {
  const { _id, name, email, gender, status } = user;

  const handleDeleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/all-users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const reminigUsers = users.filter((user) => user._id !== id);
              setUsers(reminigUsers);
            }
          });
      }
    });
  };

  return (
    <tr className="text-center">
      <th>{index}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td className="flex gap-2">
        <Link to={`/update-user/${_id}`} className="tooltip" data-tip="Edit">
          <button className="btn bg-white border btn-sm">
            <TiPencil className="text-base text-purple-700" />
          </button>
        </Link>

        <button onClick={() => handleDeleteUser(_id)} className="btn bg-white border btn-sm tooltip" data-tip="Delete">
          <RiDeleteBin6Line className="text-base text-purple-700" />
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(object).isRequired,
  setUsers: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default User;
