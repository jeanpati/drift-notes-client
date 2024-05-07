import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import TripList from "../components/trip/list";
import CreateTripForm from "../components/trip/form-modal";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <TripList />
            </div>
            <div>
              <CreateTripForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
