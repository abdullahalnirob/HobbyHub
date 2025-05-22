import React, { useEffect, useState, useContext } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentUserName = user?.displayName;

  useEffect(() => {
    fetch("http://localhost:3000/api/allGroups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
        setLoading(false);
      });
  }, []);

  const myGroups = groups.filter(
    (group) => group.displayName === currentUserName
  );

  const handleDelete = (id) => {
    toast.success("Group deleted successfully!");
    setTimeout(() => {
      navigate("/groups");
    }, 1000);
    fetch(`http://localhost:3000/api/groups/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          setGroups(groups.filter((group) => group._id !== id));
          const modal = document.getElementById("my_modal_1");
          if (modal) modal.close();
        }
      })
      .catch((error) => {
        toast.error("Failed to delete group.");
      });
  };

  if (loading) {
    return (
      <div className="text-center text-lg flex items-center justify-center h-[80vh] font-medium">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-20 my-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        My Groups by {currentUserName}
      </h2>

      {myGroups.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t created any groups yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs sticky top-0 z-10">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Max Members</th>
                <th className="p-4 text-left">End Date</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myGroups.map((group, index) => (
                <tr
                  key={group._id}
                  className={`hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4">
                    <img
                      src={group.imageUrl}
                      alt={group.groupName}
                      className="w-14 h-14 object-cover rounded-md border border-gray-200"
                    />
                  </td>
                  <td className="p-4 font-semibold text-gray-800">
                    {group.groupName}
                  </td>
                  <td className="p-4 text-gray-600">{group.hobbyCategory}</td>
                  <td className="p-4 text-gray-600">{group.maxMembers}</td>
                  <td className="p-4 text-gray-600">
                    {new Date(group.endDate).toLocaleDateString()}
                  </td>
                  <td className="p-4 space-x-2">
                    <Link to={`/update-group/${group._id}`}>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 cursor-pointer border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                        <FiEdit className="text-base" /> Update
                      </button>
                    </Link>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-600">
                          Delete Group
                        </h3>
                        <p className="py-4 text-gray-700">
                          Are you sure you want to delete this group? This
                          action cannot be undone. All data associated with this
                          group will be permanently removed.
                        </p>

                        <div className="modal-action flex justify-between items-center">
                          <form method="dialog">
                            <div className="flex items-center justify-end gap-4 mt-6">
                              <form method="dialog">
                                <button className="btn">Cancel</button>
                              </form>
                              <button
                                className="btn bg-red-600 text-white hover:bg-red-700"
                                onClick={() => handleDelete(group._id)}
                              >
                                Delete Group
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      // onClick={() => handleDelete(group._id)}
                      className="inline-flex items-center gap-1 cursor-pointer px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-50 transition-colors"
                    >
                      <FiTrash2 className="text-base" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroup;
