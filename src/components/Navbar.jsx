import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    signOutUser()
      .then(() => {
        toast.success("Signout successfully!");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Signout failed. Please try again.");
      });
  };
  // Animation variants for the menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors"
          >
            HobbyHub
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {user && (
              <div className="px-3 py-2 rounded-full ring-1 ring-blue-400 bg-blue-100">
            
                <p>{user?.displayName}</p>
              </div>
            )}
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
            <Link
              to="/create"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Create a group
            </Link>
            <Link
              onClick={handleSignOut}
              className="px-6 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full  hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Sign Out
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/groups"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  All Groups
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all text-center"
                >
                  Sign Out
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
