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
            <div key={trip.id}>
              <Link key={trip.id} href={`/trips/${trip.id}`}>
                <li className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600 truncate">
                      <>
                        {trip.title} - {trip.city} (
                        {formatDate(trip.start_date)} -{" "}
                        {formatDate(trip.end_date)})
                      </>
                    </div>
                  </div>
                </li>
              </Link>
              <button
                onClick={() => {
                  handleDelete(trip.id);
                }}
                className="bg-red-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleUpdate(trip.id);
                }}
                className="bg-blue-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
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
            <div key={trip.id}>
              <Link href={`/trips/${trip.id}`}>
                <li className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600 truncate">
                      <>
                        {trip.title} - {trip.city} (
                        {formatDate(trip.start_date)} -{" "}
                        {formatDate(trip.end_date)})
                      </>
                    </div>
                  </div>
                </li>
              </Link>
              <button
                onClick={() => {
                  handleDelete(trip.id);
                }}
                className="bg-red-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleUpdate(trip.id);
                }}
                className="bg-blue-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
