import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FiLoader } from "react-icons/fi";

const SignUp = () => {
  const { createUser, setUser,updateUser  } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {
            setUser(user);
          });
      })
      .then(() => {
        toast.success("Account Sign up Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Account creation failed!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();

  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google Sign-in Successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google Sign-in failed.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-7 md:px-6">
      <div className="max-w-sm w-full space-y-4">
        <div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-blue-900">
            Create a new account
          </h2>
          <p className="mt-1 text-center text-xs text-blue-600">
            Please fill in the form to register
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="mb-3">
            <label className="block text-xs font-medium text-blue-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-blue-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="Email address"
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-blue-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-blue-700 mb-1">
              Profile Photo URL
            </label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <button
            type="button"
            onClick={SignInWithGoogle}
            className="w-full space-x-2 flex items-center justify-center py-2 px-3 text-sm font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 rounded-full cursor-pointer"
          >
            <img
              className="w-5"
              src="https://static.vecteezy.com/system/resources/thumbnails/022/484/509/small_2x/google-lens-icon-logo-symbol-free-png.png"
              alt="Google"
            />
            <span>Continue with Google</span>
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer py-2 px-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full flex justify-center items-center"
          >
            {isLoading ? <FiLoader className="animate-spin" /> : "Sign Up"}
          </button>

          <div className="text-center mt-2 text-xs text-blue-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
