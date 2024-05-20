import React from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteTrip, getAllTrips, getTripById } from "../../data/trips";
import Link from "next/link";
import { useAppContext } from "../../context/state";
import { deleteUserTrip, getAllUserTrips } from "../../data/usertrips";
import { useRouter } from "next/router";

interface TripData {
  id: number;
  title: string;
  city: string;
  start_date: string;
  end_date: string;
}

export default function TripList() {
  const queryClient = useQueryClient();
  const { data: trips, isLoading } = useQuery({
    queryKey: ["trips"],
    queryFn: getAllTrips,
  });
  const router = useRouter();

  const { mutateAsync: deleteTripMutation } = useMutation({
    mutationFn: deleteTrip,
    onError: (error: any) => {
      if (error.response.status === 500) {
        console.error("Server error: ", error.response.data);
        window.alert("Users can only delete trips they have created o>o");
      } else {
        console.error("Error deleting trip:", error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
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
  const handleDelete = async (tripId: number) => {
    await deleteTripMutation(tripId);
  };

  const handleUpdate = (id: any) => {
    router.push(`/trips/${id}/edit`);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-6 py-8 sm:px-8">
        <h3 className="text-3xl leading-8 font-bold text-pink-600">
          Upcoming Trips
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {upcomingTrips.length === 0 ? (
          <div className="px-6 py-8 sm:px-8 text-2xl">No upcoming trips</div>
        ) : (
          upcomingTrips.map((trip: TripData) => (
            <div
              key={trip.id}
              className="bg-green-100 p-6 rounded-lg shadow-md mb-4 mx-2"
            >
              <Link href={`/trips/${trip.id}`}>
                <li className="px-6 py-6 sm:px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-wrap text-2xl font-bold text-green-800 truncate">
                      <>
                        {trip.title} - {trip.city} (
                        {formatDate(trip.start_date)} -{" "}
                        {formatDate(trip.end_date)})
                      </>
                    </div>
                  </div>
                </li>
              </Link>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => {
                    handleDelete(trip.id);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleUpdate(trip.id);
                  }}
                  className="bg-blue-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded text-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </ul>
      <div className="px-6 py-8 sm:px-8">
        <h3 className="text-3xl leading-8 font-bold text-pink-600">
          Past Trips
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {pastTrips.length === 0 ? (
          <div className="px-6 py-8 sm:px-8 text-2xl">No past trips</div>
        ) : (
          pastTrips.map((trip: TripData) => (
            <div
              key={trip.id}
              className="bg-green-100 p-6 rounded-lg shadow-md mb-4"
            >
              <Link href={`/trips/${trip.id}`}>
                <li className="px-6 py-6 sm:px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-wrap text-2xl font-bold text-green-800 truncate">
                      <>
                        {trip.title} - {trip.city} (
                        {formatDate(trip.start_date)} -{" "}
                        {formatDate(trip.end_date)})
                      </>
                    </div>
                  </div>
                </li>
              </Link>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => {
                    handleDelete(trip.id);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleUpdate(trip.id);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
