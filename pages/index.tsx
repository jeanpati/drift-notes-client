import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { ReactNode } from "react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40">
      <h1 className="mr-40 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-rose-200 hover:animate-bounce">
        Welcome to Drift Notes!
      </h1>
      <p className="mr-40 mb-28 text-rose-200 text-5xl ">
        your travel notebook
      </p>
      <h1 className=" text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:animate-bounce">
        Welcome to Drift Notes!
      </h1>
      <p className=" mb-28 text-blue-300 text-5xl ">your travel notebook</p>
      <h1 className="ml-40 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 hover:animate-bounce">
        Welcome to Drift Notes!
      </h1>
      <p className="ml-40 mb-28 text-orange-300 text-5xl ">
        your travel notebook
      </p>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
