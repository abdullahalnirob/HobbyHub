import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = (e) => {
    e.preventDefault();
    setIsOpen(false);
    signOutUser()
      .then(() => {
        toast.success("Signout successfully!");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Signout failed. Please try again.");
      });
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between py-3 relative">
          <div>
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-extrabold text-gray-800 transition-colors"
            >
              HobbyHub
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/groups"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              All Groups
            </Link>
            {
              user && (
                <Link
                  to="/my-groups"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  My Groups
                </Link>
              )
            }
            {
              user && (
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Create a group
                </Link>
              )
            }
            {
              user && (
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </Link>
              )
            }
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <a
                className="my-anchor-element-class"
                data-tip={user.displayName}
              >
                <Tooltip
                  anchorSelect=".my-anchor-element-class"
                  content={user.displayName}
                />
                <div className="ring-1 ring-blue-500 rounded-full">
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 object-cover rounded-full cursor-pointer"
                    alt={user?.displayName}
                  />
                </div>
              </a>
            )}
            {
              user ? (
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Sign In
                </Link>
              )
            }
          </div>
        </div>

        <div className="flex items-center justify-between py-4 md:hidden">
          <Link
            to="/"
            className="text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors"
          >
            HobbyHub
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/groups"
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  All Groups
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/my-groups"
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  My Groups
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/create"
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Create a group
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleSignOut}
                  className="w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Sign Out
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
