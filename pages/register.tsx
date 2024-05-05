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
    <div className="columns is-centered">
      <div className="column is-half">
        <form className="box" onSubmit={submit}>
          <h1 className="title">Welcome!</h1>
          <Input
            id="firstName"
            refEl={firstName}
            type="text"
            label="First Name"
          />
          <Input id="lastName" refEl={lastName} type="text" label="Last Name" />

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
                Submit
              </button>
            </div>
            <div className="control">
              <Link href="/login">
                <button className="button is-link is-light">Cancel</button>
              </Link>
            </div>
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
