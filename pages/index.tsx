import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { ReactNode } from "react";

export default function Index() {
  return (
    <div className="w-full pt-60 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
            welcome to your travel notebook!
          </h1>
          <p className="text-xl md:text-3xl lg:text-5xl text-center text-blue-300 mb-12 hover:motion-safe:animate-bounce">
            drift notes
          </p>
          <img
            className="object-cover mb-8 max-w-full h-auto mx-auto"
            src="/images/1.png"
            alt="Cover Image"
          />
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
