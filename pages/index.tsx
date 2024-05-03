import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { ReactNode } from "react";

export default function Index() {
  return (
    <div>
      <h1>welcome to Drift Notes!</h1>
      <p>your travel notebook</p>
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
