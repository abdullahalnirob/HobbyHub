"use client"

import { useEffect, useState } from "react"
import { FiUsers, FiCalendar, FiArrowRight, FiFilter } from "react-icons/fi"
import { FaCrown } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"

const AllGroups = () => {
  const [groups, setGroups] = useState([])
  const [filteredGroups, setFilteredGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Other",
  ]

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "category", label: "Category" },
    { value: "members-high", label: "Max Members (High to Low)" },
    { value: "members-low", label: "Max Members (Low to High)" },
    { value: "date-newest", label: "End Date (Newest)" },
    { value: "date-oldest", label: "End Date (Oldest)" },
  ]

  useEffect(() => {
    fetch("https://hobby-hub-server-nine.vercel.app/api/allGroups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data)
        setFilteredGroups(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching groups:", error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let filtered = groups

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (group) =>
          group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          group.hobbyCategory.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((group) => group.hobbyCategory === selectedCategory)
    }

    // Apply sorting
    if (sortBy !== "default") {
      filtered = [...filtered].sort((a, b) => {
        switch (sortBy) {
          case "name-asc":
            return a.groupName.localeCompare(b.groupName)
          case "name-desc":
            return b.groupName.localeCompare(a.groupName)
          case "category":
            return a.hobbyCategory.localeCompare(b.hobbyCategory)
          case "members-high":
            return b.maxMembers - a.maxMembers
          case "members-low":
            return a.maxMembers - b.maxMembers
          case "date-newest":
            return new Date(b.endDate) - new Date(a.endDate)
          case "date-oldest":
            return new Date(a.endDate) - new Date(b.endDate)
          default:
            return 0
        }
      })
    }

    setFilteredGroups(filtered)
  }, [searchTerm, groups, sortBy, selectedCategory])

  if (loading) {
    return (
      <div className="text-center text-lg flex items-center justify-center h-[80vh] font-medium">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }

  return (
    <Fade>
      <div className="px-4 md:px-20 my-5 md:mb-10">
        <div className="text-center mb-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Groups</h1>

          <div className="max-w-2xl mx-auto mb-4">
            <input
              type="text"
              placeholder="Search Group..."
              className="w-full px-6 py-2 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                  ? "bg-blue-400 text-white"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredGroups.length} of {groups.length} groups
            {selectedCategory !== "All" && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {selectedCategory}
              </span>
            )}
          </div>
        </div>
        {filteredGroups.length === 0 ? (
          <div className="text-center min-h-[50vh] flex flex-col items-center justify-center">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <p className="text-gray-600 text-lg mb-2">No groups found</p>
            <p className="text-gray-400 text-sm">
              {searchTerm ? "Try adjusting your search terms" : "No groups available at the moment"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
            {filteredGroups.map((group) => (
              <div
                key={group._id}
                className="bg-white ring-1 ring-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:ring-gray-300 transition-all duration-200"
              >
                <img
                  src={group.imageUrl || "/placeholder.svg"}
                  alt={group.groupName}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-3">
                    {group.hobbyCategory}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.groupName}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Description:</span> {group.description}
                  </div>
                  <div className="flex items-center text-gray-500 text-4m mb-1">
                    <FiUsers className="mr-2 w-4 h-4" />
                    <span>Maximum {group.maxMembers} members</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-4m mb-1">
                    <FiCalendar className="mr-2 w-4 h-4" />
                    <span>End: {group.endDate}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-4m mb-4">
                    <FaCrown className="mr-2 w-4 h-4" />
                    <span>Group by: {group.displayName}</span>
                  </div>
                  <Link to={`/group/${group._id}`}>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors duration-200">
                      See More <FiArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fade>
  )
}

export default AllGroups
