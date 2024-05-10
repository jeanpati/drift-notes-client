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
    <div className="min-h-screen bg-green-900 flex items-center justify-center">
      <div className="max-w-md w-full">
        <form
          className="bg-rose-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submit}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
            Welcome!
          </h1>
          <Input
            id="firstName"
            refEl={firstName}
            type="text"
            label="First Name"
          />
          <Input id="lastName" refEl={lastName} type="text" label="Last Name" />
          <Input id="email" refEl={email} type="text" label="Email" />
          <Input id="username" refEl={username} type="text" label="Username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="Password"
          />
          <div className="flex items-center justify-between">
            <button
              className="mt-5 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <Link href="/login">
              <button className="mt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Cancel
              </button>
            </Link>
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
