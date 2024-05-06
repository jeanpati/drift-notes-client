import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Dashboard() {
  return <div>Dashboard Page</div>;
}

Dashboard.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
