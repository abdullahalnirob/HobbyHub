import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateGroup = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user || {};
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();

  const group = data.find((group) => group._id === id);

  const [groupName, setGroupName] = useState(group.groupName);
  const [hobbyCategory, setHobbyCategory] = useState(group.hobbyCategory);
  const [description, setDescription] = useState(group.description);
  const [meetingLocation, setMeetingLocation] = useState(group.meetingLocation);
  const [maxMembers, setMaxMembers] = useState(group.maxMembers);
  const [endDate, setEndDate] = useState(group.endDate?.slice(0, 10));
  const [imageUrl, setImageUrl] = useState(group.imageUrl);

  const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Other",
  ];

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedGroup = {
      groupName,
      hobbyCategory,
      description,
      meetingLocation,
      maxMembers: parseInt(maxMembers),
      endDate,
      imageUrl,
      email,
      displayName,
    };

    console.log("Updated group data:", updatedGroup);
    fetch(`https://hobby-hub-server-nine.vercel.app/api/groups/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Group updated successfully!");
        navigate("/groups");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update group.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl w-full space-y-6">
        <div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-blue-900">
            Update Hobby Group
          </h2>
          <p className="mt-1 text-center text-xs text-blue-600">
            Modify the details to update your group
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Group Name
                </label>
                <input
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  type="text"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Hobby Category
                </label>
                <select
                  value={hobbyCategory}
                  onChange={(e) => setHobbyCategory(e.target.value)}
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                >
                  <option value="">Select a category</option>
                  {hobbyCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Meeting Location
                </label>
                <input
                  value={meetingLocation}
                  onChange={(e) => setMeetingLocation(e.target.value)}
                  type="text"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Max Members
                </label>
                <input
                  value={maxMembers}
                  onChange={(e) => setMaxMembers(e.target.value)}
                  type="number"
                  min="1"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  End Date
                </label>
                <input
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Image URL
                </label>
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="url"
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Your Name
                </label>
                <input
                  value={displayName}
                  readOnly
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer mb-20 py-2 px-3 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
