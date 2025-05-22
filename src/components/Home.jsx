import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import {
  FiUsers,
  FiCalendar,
  FiAward,
  FiArrowRight,
  FiMessageCircle,
  FiHeart,
  FiBookOpen,
} from "react-icons/fi";

const Home = () => {
  // Sample data for featured groups
  const [featuredGroups, setFeaturedGroups] = useState([
    {
      id: 1,
      title: "Book Club: Modern Fiction",
      members: 24,
      category: "Literature",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg",
      nextMeeting: "May 25, 2025",
    },
    {
      id: 2,
      title: "Hiking Adventures",
      members: 56,
      category: "Outdoors",
      image:
        "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/different_sports.jpg?itok=CW5zK9vp",
      nextMeeting: "May 23, 2025",
    },
    {
      id: 3,
      title: "Tech Entrepreneurs",
      members: 32,
      category: "Business",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_Ujk7XqXVK5V-IJd-U2rb7CeCwjneug1xw&s",
      nextMeeting: "May 22, 2025",
    },
    {
      id: 4,
      title: "Language Exchange",
      members: 45,
      category: "Education",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVleN2kW3h464pXo46B-ZmCjEw6vWI_X4l8g&s",
      nextMeeting: "May 26, 2025",
    },
    {
      id: 5,
      title: "Urban Photography",
      members: 38,
      category: "Arts",
      image:
        "https://www.pewresearch.org/wp-content/uploads/2024/03/SR_24.03.11_sports_feature-jpg.webp?w=640",
      nextMeeting: "May 24, 2025",
    },
    {
      id: 6,
      title: "Meditation Circle",
      members: 19,
      category: "Wellness",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWAV-ZV_gy6u6-HAM-SFpVGoAD8PCgoSpiw&s",
      nextMeeting: "May 21, 2025",
    },
  ]);

  // Stats section data
  const stats = [
    {
      label: "Active Groups",
      value: "2,500+",
      icon: <FiUsers className="h-8 w-8" />,
    },
    {
      label: "Members",
      value: "120,000+",
      icon: <FiHeart className="h-8 w-8" />,
    },
    {
      label: "Events Monthly",
      value: "850+",
      icon: <FiCalendar className="h-8 w-8" />,
    },
    {
      label: "Countries",
      value: "65+",
      icon: <FiMessageCircle className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Slider Banner Section */}
      <section className="w-full">
        <Slider />
      </section>

      {/* Featured Groups Section */}
      <section className="max-w-7xl bg-gray-100 mx-auto  py-16 px-5 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Groups</h2>
          <p className="mt-3 text-lg text-gray-600">
            Join a community that shares your interests
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden transition-transform"
            >
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <span className="inline-block px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-3">
                  {group.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {group.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <FiUsers className="mr-1" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <FiCalendar className="mr-1" />
                  <span>Next: {group.nextMeeting}</span>
                </div>
                <button className="w-full flex items-center justify-center px-3 py-1.5 border border-transparent rounded-full cursor-pointer duration-150 shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Join Group <FiArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-5 cursor-pointer py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
            Explore All Groups
          </button>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">
              Our Growing Community
            </h2>
            <p className="mt-4 text-xl text-blue-400">
              Join thousands of people connecting every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow bg-opacity-10 rounded-lg p-8 text-center"
              >
                <div className="text-blue-300 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold  mb-2">{stat.value}</p>
                <p className="text-xl text-blue-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Connect with like-minded people in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-6">
              <FiUsers className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Find Your Group
            </h3>
            <p className="text-gray-600">
              Browse groups based on your interests, location, or
              recommendations.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-6">
              <FiBookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Join and Participate
            </h3>
            <p className="text-gray-600">
              Become a member and engage in events, discussions, and activities.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-6">
              <FiAward className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Create Connections
            </h3>
            <p className="text-gray-600">
              Build meaningful relationships with people who share your
              passions.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2 cursor-pointer border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
