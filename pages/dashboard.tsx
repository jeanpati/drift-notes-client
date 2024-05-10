import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import TripList from "../components/trip/list";
import CreateTripForm from "../components/trip/form-modal";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-green-900 pt-40">
      <div className="max-w-5xl w-full">
        <div className="py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-pink-200 rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4 text-center text-black">
                Trip List
              </h2>
              <TripList />
            </div>
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4 text-center text-black">
                Create Trip
              </h2>
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
