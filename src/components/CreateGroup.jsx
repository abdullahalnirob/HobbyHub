import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const [groupName, setgroupName] = useState("");
  const [hobbyCategory, sethobbyCategory] = useState("");
  const [description, setDescription] = useState("");
  const [meetingLocation, setmeetingLocation] = useState("");
  const [maxMembers, setMaxMembers] = useState();
  const [endDate, setEndDate] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const navigate = useNavigate()
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

  const handleCreate = (event) => {
    event.preventDefault();
    const groupInfo = {
      groupName,
      hobbyCategory,
      description,
      meetingLocation,
      maxMembers,
      endDate,
      imageUrl,
      email, displayName
    };
    fetch("https://hobby-hub-server-nine.vercel.app/api/create", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(groupInfo),
    })
      .then(function () {
        toast.success("Successfully group created")
        navigate("/groups")

      })
      .catch(function (err) {
        toast.error("Error group not create")
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl w-full space-y-6">
        <div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-blue-900">
            Create a New Hobby Group
          </h2>
          <p className="mt-1 text-center text-xs text-blue-600">
            Fill in the details to start your community
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleCreate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Group Name
                </label>
                <input
                  name="groupName"
                  value={groupName}
                  onChange={(e) => setgroupName(e.target.value)}
                  type="text"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                  placeholder="e.g., Weekend Book Club"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Hobby Category
                </label>
                <select
                  name="hobbyCategory"
                  value={hobbyCategory}
                  onChange={(e) => sethobbyCategory(e.target.value)}
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
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                  placeholder="Describe your group and its activities"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Meeting Location
                </label>
                <input
                  name="meetingLocation"
                  value={meetingLocation}
                  onChange={(e) => setmeetingLocation(e.target.value)}
                  type="text"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                  placeholder="e.g., Central Park, NYC"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  Max Members
                </label>
                <input
                  name="maxMembers"
                  value={maxMembers}
                  onChange={(e) => setMaxMembers(e.target.value)}
                  type="number"
                  min="1"
                  required
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                  placeholder="e.g., 50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  End Date
                </label>
                <input
                  name="startDate"
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
                  name="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="url"
                  className="block w-full px-3 py-2 border border-blue-300 text-sm rounded-md"
                  placeholder="https://example.com/image.jpg"
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

          <div>
            <button
              type="submit"
              className="w-full cursor-pointer mb-20 py-2 px-3 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
