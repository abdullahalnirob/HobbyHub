"use client"

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

const Stats = ({ currentUserName = "defaultUser" }) => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://hobby-hub-server-nine.vercel.app/api/allGroups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching groups:", error)
        setLoading(false)
      })
  }, [])

  const { user } = useContext(AuthContext)

  const myGroups = groups.filter(
    (group) => group.displayName === user?.displayName || group.createdBy === user?.displayName
  )

  const totalGroups = groups.length
  const myGroupsCount = myGroups.length
  const myActiveGroups = myGroups.filter((group) => group.status === "active" || !group.status).length
  const myRecentGroups = myGroups.filter((group) => {
    if (!group.createdAt && !group.created_at) return false
    const groupDate = new Date(group.createdAt || group.created_at)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return groupDate > weekAgo
  }).length

  const platformShare = totalGroups > 0 ? Math.round((myGroupsCount / totalGroups) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-2 py-4 max-w-6xl">
        <div className="mb-4">
          <div className="text-right mb-2">
            <p className="text-gray-600 text-sm">
              Welcome back, <span className="text-blue-600 font-semibold text-base">{user?.displayName}</span>
            </p>
          </div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Dashboard Overview</h1>
            <p className="text-gray-600 text-sm">Track your group activities and community engagement</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-4 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div className="text-xs bg-slate-600/50 px-2 py-1 rounded-full border border-white/10">
                  {myRecentGroups > 0 ? `+${myRecentGroups} new` : "No new groups"}
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{loading ? "..." : myGroupsCount}</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide font-medium">My Groups</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-4 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-xs bg-emerald-600/50 px-2 py-1 rounded-full border border-white/10">
                  You own {platformShare}%
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{loading ? "..." : totalGroups}</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide font-medium">Total Groups</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-4 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-xs bg-purple-600/50 px-2 py-1 rounded-full border border-white/10">
                  {myActiveGroups === myGroupsCount ? "All active" : `${myGroupsCount - myActiveGroups} inactive`}
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{loading ? "..." : myActiveGroups}</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide font-medium">Active Groups</div>
            </div>
          </div>
        </div>

        {!loading && myGroupsCount === 0 && (
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Start?</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              You haven't created any groups yet. Start building your community and connect with people who share your
              interests and hobbies.
            </p>
            <Link to="/dashboard/create-group">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Create Your First Group
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats
