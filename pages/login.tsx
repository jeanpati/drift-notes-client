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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <form
          className="outline outline-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submit}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
            welcome back!
          </h1>

          <Input id="username" refEl={username} type="text" label="username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="password"
          />

          <div className="flex items-center justify-between">
            <button
              className="mt-5 outline outline-emerald-800 hover:bg-rose-100 text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              login
            </button>
          </div>
          <Link href="/register">
            <button className="mt-8 hover:underline text-black font-bold rounded focus:outline-none focus:shadow-outline">
              register
            </button>
          </Link>
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
