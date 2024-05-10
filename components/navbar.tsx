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
      <div className="flex items-center">
        <Link
          href="/dashboard"
          className="bg-emerald-900 text-emerald-100 px-4 py-2 rounded-md mr-2"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Log out
        </button>
      </div>
    );
  };

  const getLoggedOutButtons = () => {
    return (
      <div>
        <Link
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Log in
        </Link>
      </div>
    );
  };

  return (
    <nav className=" bg-gradient-to-r from-red-500 to-rose-300 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-4 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-black hover:text-emerald-600"
          >
            home
          </Link>
        </div>
        <h1 className="ml-40 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-green-600">
          drift notes
        </h1>
        <div>{isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()}</div>
      </div>
    </nav>
  );
}
