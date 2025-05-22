import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Group = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const group = data.find((group) => group._id === id);

  if (!group) {
    return <div className="text-center mt-10 text-red-500">Group not found.</div>;
  }

  const {
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    email,
    displayName,
  } = group;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col md:flex-row">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-sm"
        />
        <div className="md:ml-6 mt-6 md:mt-0 flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{groupName}</h1>
          <p className="text-sm text-gray-500 mt-1">Category: {hobbyCategory}</p>
          <p className="text-gray-600 mt-4">{description}</p>

          <div className="mt-6 space-y-2">
            <p><strong>📍 Location:</strong> {meetingLocation}</p>
            <p><strong>🧑‍🤝‍🧑 Max Members:</strong> {maxMembers}</p>
            <p><strong>📅 Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
            <p><strong>👤 Organizer:</strong> {displayName}</p>
            <p><strong>✉️ Contact:</strong> <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
