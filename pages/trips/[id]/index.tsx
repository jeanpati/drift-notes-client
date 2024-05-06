import React from "react";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";

export default function TripDetail() {
  return <div>Trip Detail Page</div>;
}

TripDetail.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
