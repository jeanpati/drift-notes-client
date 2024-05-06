import React from "react";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";

export default function EditTrip() {
  return <div>Edit Trip Page</div>;
}

EditTrip.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
