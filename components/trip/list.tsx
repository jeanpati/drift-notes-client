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
  const upcomingTrips =
    trips?.filter((trip: TripData) => new Date(trip.end_date) >= today) || [];
  const pastTrips =
    trips?.filter((trip: TripData) => new Date(trip.end_date) < today) || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const handleDelete = async (tripId: number) => {
    window.confirm("Are you sure you want to delete this trip?");
    if (true) {
      await deleteTripMutation(tripId);
      router.push("/dashboard");
    }
  };

  const handleUpdate = (id: any) => {
    router.push(`/trips/${id}/edit`);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-6 py-8 sm:px-8">
        <h3 className="text-3xl leading-8 font-bold text-orange-500">
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
              className="bg-green-50 p-6 rounded-lg shadow-md mb-4 mx-5"
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
                    <div className="mt-4 space-x-4">
                      <button
                        onClick={() => {
                          handleDelete(trip.id);
                        }}
                        className="outline outline-red-500 hover:bg-rose-100 text-red-500 font-bold py-2 px-4 rounded text-lg"
                      >
                        delete
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate(trip.id);
                        }}
                        className="outline outline-cyan-500 hover:bg-cyan-100 text-cyan-600 font-bold py-2 px-4 rounded text-lg"
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          ))
        )}
      </ul>
      <div className="px-6 py-8 sm:px-8">
        <h3 className="text-3xl leading-8 font-bold text-orange-600">
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
              className="bg-slate-100 p-6 rounded-lg shadow-md mb-4 mx-5"
            >
              <Link href={`/trips/${trip.id}`}>
                <li className="px-6 py-6 sm:px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-wrap text-2xl font-bold text-slate-800 truncate">
                      <>
                        {trip.title} - {trip.city} (
                        {formatDate(trip.start_date)} -{" "}
                        {formatDate(trip.end_date)})
                      </>
                    </div>
                    <div className="mt-4 space-x-4">
                      <button
                        onClick={() => {
                          handleDelete(trip.id);
                        }}
                        className="outline outline-red-500 hover:bg-rose-100 text-red-500 font-bold py-2 px-4 rounded text-lg"
                      >
                        delete
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate(trip.id);
                        }}
                        className="outline outline-cyan-500 hover:bg-cyan-100 text-cyan-600 font-bold py-2 px-4 rounded text-lg"
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
