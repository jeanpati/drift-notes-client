import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Input } from "../components/form-elements";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAppContext } from "../context/state";
import { login } from "../data/auth";

export default function Login() {
  const { setToken } = useAppContext();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      username: username.current?.value || "",
      password: password.current?.value || "",
    };

    login(user).then((res) => {
      if (res.token) {
        setToken(res.token);
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <form className="box" onSubmit={submit}>
          <h1 className="title">Welcome Back!</h1>
          <Input id="username" refEl={username} type="text" label="Username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="Password"
          />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Login
              </button>
            </div>
            <div className="control">
              <Link href="/register">
                <button className="button is-link is-light">Register</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
