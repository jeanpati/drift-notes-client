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
    <div className="min-h-screen bg-green-900 flex items-center justify-center">
      <div className="max-w-md w-full">
        <form
          className="bg-rose-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submit}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
            Welcome Back!
          </h1>

          <Input id="username" refEl={username} type="text" label="Username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="Password"
          />

          <div className="flex items-center justify-between">
            <button
              className=" mt-5 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link href="/register">
              <button className="mt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </Link>
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
