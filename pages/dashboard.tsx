import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import TripList from "../components/trip/list";
import CreateTripForm from "../components/trip/create-form-modal";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-between pt-40">
      <div className="max-w-8xl w-full px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className=" md:flex-1 rounded-lg shadow-lg p-6 w-full">
              <h2 className="text-7xl font-bold mb-4 text-center text-orange-500">
                trip list
              </h2>
              <div className="flex-row mb-8 justify-items-end">
                <CreateTripForm />
              </div>
              <TripList />
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
