import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { ReactNode } from "react";

export default function Index() {
  return (
    <div className="w-full pt-20 md:pt-40 bg-beige-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img
          className="object-cover mb-8 max-w-full h-auto mx-auto"
          src="/images/1.png"
          alt="Cover Image"
        />
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 hover:animate-bounce mb-4">
            welcome to your travel notebook!
          </h1>
          <p className="text-xl md:text-3xl lg:text-5xl text-orange-300 mb-12">
            plan your days for worry-free trips
          </p>
        </div>
      </div>
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
