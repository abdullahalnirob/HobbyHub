import React, { useEffect, useState } from "react";
import { FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi";
import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="text-center text-lg flex items-center justify-center h-[80vh] font-medium">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-20 my-5 md:my-10">
        {groups.map((group) => (
          <div
            key={group._id}
            className="bg-gray-50 ring-1 ring-gray-300 rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <span className="inline-block px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-3">
                {group.hobbyCategory}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {group.groupName}
              </h3>
              <div className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Description:</span>{" "}
                {group.description}
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <FiUsers className="mr-1" />
                <span>Maximum {group.maxMembers} members</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <FiCalendar className="mr-1" />
                <span>End: {group.endDate}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <FaCrown className="mr-1" />
                <span>Group by: {group.displayName}</span>
              </div>
              <Link to={`/group/${group._id}`}>
                <button className="w-full flex items-center justify-center px-3 py-1.5 border border-transparent rounded-full cursor-pointer duration-150 shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  See More <FiArrowRight className="ml-2 text-sm" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default AllGroups;
