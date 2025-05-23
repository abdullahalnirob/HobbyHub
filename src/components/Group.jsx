import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FiMapPin, FiUsers, FiCalendar, FiUser } from "react-icons/fi";
import { toast } from "react-hot-toast";

const Group = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const group = data.find((group) => group._id === id);

  if (!group) {
    return (
      <div className="text-center mt-10 text-red-500">Group not found.</div>
    );
  }

  const {
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    endDate,
    imageUrl,
    displayName,
  } = group;

  const currentDate = new Date();
  const isExpired = new Date(endDate) < currentDate;
  const navigate = useNavigate();
  const handleJoin = () => {
    toast.success(`You've successfully joined "${groupName}"!.`, {
      duration: 5000,
      style: {
        // background: "#4f46e5",
        // color: "#fff",
        fontWeight: "500",
      },
    });
    setTimeout(() => {
      navigate("/groups");
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white p-8 ring-1 ring-gray-200 rounded-xl shadow-lg grid md:grid-cols-2 gap-6 items-start">
        <div className="w-full h-64 md:h-full">
          <img
            src={imageUrl}
            alt={groupName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {groupName}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Category: {hobbyCategory}
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {description}
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FiMapPin className="text-blue-600" />
                <span>
                  <strong>Location:</strong> {meetingLocation}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FiUsers className="text-blue-600" />
                <span>
                  <strong>Max Members:</strong> {maxMembers}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FiCalendar className="text-blue-600" />
                <span>
                  <strong>End Date:</strong>{" "}
                  {new Date(endDate).toLocaleDateString()}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FiUser className="text-blue-600" />
                <span>
                  <strong>Organizer:</strong> {displayName}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              className={`w-full font-semibold py-2 px-4 rounded-full transition duration-200 ${
                isExpired
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              }`}
              onClick={!isExpired ? handleJoin : null}
              disabled={isExpired}
            >
              {isExpired ? "The group is no longer active" : "Join Group"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
