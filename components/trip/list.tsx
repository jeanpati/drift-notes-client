import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTrips } from "../../data/trips";
import Link from "next/link";

interface TripData {
  id: number;
  title: string;
  city: string;
  start_date: string;
  end_date: string;
}

export default function TripList() {
  const { data: trips, isLoading } = useQuery({
    queryKey: ["trips"],
    queryFn: getAllTrips,
  });

  if (isLoading) return <div>Loading...</div>;

  const today = new Date();
  const upcomingTrips = trips.filter(
    (trip: TripData) => new Date(trip.end_date) >= today
  );
  const pastTrips = trips.filter(
    (trip: TripData) => new Date(trip.end_date) < today
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Upcoming Trips
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {upcomingTrips.length === 0 ? (
          <div className="px-4 py-5 sm:p-6">No upcoming trips</div>
        ) : (
          upcomingTrips.map((trip: TripData) => (
            <Link key={trip.id} href={`/trips/${trip.id}`}>
              <li className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600 truncate">
                    <>
                      {trip.title} - {trip.city} ({formatDate(trip.start_date)}{" "}
                      - {formatDate(trip.end_date)})
                    </>
                  </div>
                </div>
              </li>
            </Link>
          ))
        )}
      </ul>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Past Trips
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {pastTrips.length === 0 ? (
          <div className="px-4 py-5 sm:p-6">No past trips</div>
        ) : (
          pastTrips.map((trip: TripData) => (
            <Link key={trip.id} href={`/trips/${trip.id}`}>
              <li className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600 truncate">
                    <>
                      {trip.title} - {trip.city} ({formatDate(trip.start_date)}{" "}
                      - {formatDate(trip.end_date)})
                    </>
                  </div>
                </div>
              </li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
}
