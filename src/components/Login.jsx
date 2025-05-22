import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { FiLoader } from "react-icons/fi";
import { auth } from "../firebase/firebase.config";
import { use, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { SignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);

    SignIn(email, password)
      .then(() => {
        toast.success("User Login Successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("User Login Failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("User loign successfull!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google Sign-in failed.");
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "A password reset email is send. Please Check your email!"
        );
      })
      .catch(() => {
        toast.error("Email field empy or Something error!");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-7 md:px-6">
      <div className="max-w-sm w-full space-y-4">
        <div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-blue-900">
            Sign in to your account
          </h2>
          <p className="mt-1 text-center text-xs text-blue-600">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-blue-700 mb-1"
              >
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                ref={emailRef}
                type="email"
                autoComplete="email"
                required
                className="block w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-500"
                placeholder="Email address"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-blue-700 mb-1"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-2 py-1.5 border border-blue-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-end text-xs">
            <div>
              <a
                onClick={handleForgetPassword}
                className="text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={SignInWithGoogle}
              className="w-full space-x-2 flex items-center justify-center py-2 px-3 text-sm font-medium  bg-transparent text-blue-400 ring-1 ring-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 rounded-full cursor-pointer"
            >
              <img
                className="w-5"
                src="https://static.vecteezy.com/system/resources/thumbnails/022/484/509/small_2x/google-lens-icon-logo-symbol-free-png.png"
                alt=""
              />
              Login with Google
            </button>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-full px-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 cursor-pointer flex justify-center items-center"
            >
              {loading ? <FiLoader className="animate-spin" /> : "Sign in"}
            </button>
          </div>

          <div className="text-center mt-2 text-xs text-blue-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
