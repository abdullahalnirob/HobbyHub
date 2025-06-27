import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiHome, FiUsers, FiMenu, FiX } from "react-icons/fi";
import { PlusIcon, ChevronLeft } from "lucide-react";

const navItems = [
  { name: "Home", to: "/", icon: <FiHome /> },
  { name: "My Groups", to: "/dashboard/my-groups", icon: <FiUsers /> },
  { name: "All Groups", to: "/dashboard/all-groups", icon: <FiUsers /> },
  { name: "Create Groups", to: "/dashboard/create-groups", icon: <PlusIcon /> },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/10 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                ${isCollapsed ? "w-20" : "w-64"} 
                fixed lg:relative lg:translate-x-0 
                bg-slate-900
                text-white flex flex-col 
                transition-all duration-300 ease-in-out
                h-screen z-50 shadow-2xl
                border-r border-slate-700
            `}
      >
        {" "}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <h2 className="text-xl font-bold text-blue-400">
                Hobbyhub Admin
              </h2>
            )}
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <ChevronLeft
                className={`w-4 h-4 transition-transform ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              onClick={toggleSidebar}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-700/50 text-slate-300 hover:text-white"
                }`
              }
              onClick={() => setIsSidebarOpen(false)}
              end
            >
              <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                {item.icon}
              </div>
              {!isCollapsed && <span className="truncate">{item.name}</span>}

              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700">
          {!isCollapsed ? (
            <div className="text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Hobbyhub
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                H
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FiMenu className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              Hobbyhub Admin
            </h1>
            <div className="w-10 h-10" /> {/* Spacer */}
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
