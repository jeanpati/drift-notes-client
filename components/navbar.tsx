import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";

export default function Navbar(): JSX.Element {
  const { token, setProfile } = useAppContext();
  const navbar = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = () => {
    setProfile({
      id: 0,
      username: "",
      first_name: "",
      last_name: "",
      email: "",
    });
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const getLoggedInButtons = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="flex">
          <Link
            href="/"
            className="text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 "
          >
            home
          </Link>
          <Link
            href="/dashboard"
            className="text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline"
          >
            dashboard
          </Link>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="mr-5 text-3xl text-black hover:text-red-500 transition duration-75 hover:underline"
          >
            log out
          </button>
        </div>
      </div>
    );
  };

  const getLoggedOutButtons = () => {
    return (
      <div>
        <Link
          href="/"
          className="text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 "
        >
          home
        </Link>
        <Link
          href="/login"
          className="text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline"
        >
          log in
        </Link>
      </div>
    );
  };

  return (
    <nav className="text-emerald-900 py-1 relative w-full">
      <div className="m-3 container flex justify-between items-center px-1">
        <h1 className="text-7xl bg-clip-text text-transparent bg-emerald-900 pt-5">
          drift notes.
        </h1>
      </div>
      <div>{isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()}</div>
    </nav>
  );
}
