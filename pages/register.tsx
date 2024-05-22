import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Input } from "../components/form-elements";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAppContext } from "../context/state";
import { register } from "../data/auth";

type User = {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
};

export default function Register() {
  const { setToken } = useAppContext();

  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: User = {
      username: username.current?.value || "",
      password: password.current?.value || "",
      first_name: firstName.current?.value || "",
      last_name: lastName.current?.value || "",
      email: email.current?.value || "",
    };

    await register(user).then((res) => {
      if (res.token) {
        setToken(res.token);
        router.push("/");
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
            happy to have you!
          </h1>
          <Input
            id="firstName"
            refEl={firstName}
            type="text"
            label="first name"
          />
          <Input id="lastName" refEl={lastName} type="text" label="last name" />
          <Input id="email" refEl={email} type="text" label="email" />
          <Input id="username" refEl={username} type="text" label="username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="password"
          />
          <div className="flex items-center justify-between">
            <Link href="/login">
              <button className="mt-5 hover:underline text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                cancel
              </button>
            </Link>
            <button
              className="mt-5 outline outline-emerald-800 hover:bg-rose-100 text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
Register.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
