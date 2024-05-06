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
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <span className="icon">
            <i className="fas fa-user-circle is-medium"></i>
          </span>
        </a>
        <a onClick={handleLogout}>Log out</a>
      </div>
    );
  };

  const getLoggedOutButtons = () => {
    return (
      <div className="navbar-item">
        <div className="buttons">
          <Link href="/login" className="button is-light">
            Log in
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav
      className="navbar mb-3 is-warning px-5 is-fixed-top is-top"
      role="navigation"
      aria-label="main navigation"
    >
      {/* <div className="navbar-brand">
        <Link href="/">
          <img
            src="Logo"
            alt="Logo"
            style={{ width: "4rem", height: "4rem" }}
            className="relative"
          />
        </Link>
      </div> */}

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          <Link href="/" className="navbar-item">
            home
          </Link>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()}
        </div>
      </div>
    </nav>
  );
}
