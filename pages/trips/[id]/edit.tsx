import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTripById, Trip, updateTrip } from "../../../data/trips";
import { getAllDays } from "../../../data/days";
import { Event, getAllEvents } from "../../../data/events";
import { DayColumn, Day } from "../../../components/day/card";

export default function EditTrip() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [updatedData, setUpdatedData] = useState<Trip | null>(null);

  useEffect(() => {
    if (id) {
      setUpdatedData((prevData) => ({
        ...prevData,
        id: Number(id),
      }));
    }
  }, [id]);

  const {
    data: trip,
    isLoading: isLoadingTrip,
    error: tripError,
  } = useQuery({
    queryKey: ["trip", id],
    queryFn: () => getTripById(Number(id)),
    enabled: !!id,
  });

  const {
    data: allDays,
    isLoading: isLoadingDays,
    error: daysError,
  } = useQuery<Day[]>({
    queryKey: ["days"],
    queryFn: getAllDays,
    enabled: !!id,
  });

  const {
    data: allEventsData,
    isLoading: isLoadingEvents,
    error: eventsError,
  } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  const handleChange = (field: string, value: any) => {
    setUpdatedData((prevUpdatedData) => ({
      ...prevUpdatedData,
      [field]: value,
    }));
  };

  // Runs a function to update a trip's data
  const { mutateAsync: updateTripMutation } = useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip"] });
    },
  });
  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      if (updatedData) {
        await updateTripMutation(updatedData);
        router.push(`/trips/${updatedData.id}`);
      }
    } catch (error) {
      console.error("An error occurred while updating the trip:", error);
    }
  };

  if (isLoadingTrip || isLoadingDays || isLoadingEvents) {
    return <div>Loading...</div>;
  }

  if (tripError) {
    return <div>Error: {tripError.message}</div>;
  }

  if (daysError) {
    return <div>Error: {daysError.message}</div>;
  }
  if (eventsError) {
    return <div>Error: {eventsError.message}</div>;
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="min-h-screen bg-green-900 flex items-center justify-center pt-40">
      <div className="container mx-auto py-8 ml-10">
        <h1 className="text-5xl font-bold mb-6 text-white ml-10">Edit Trip</h1>
        <div className="mb-8">
          <label className="block text-green-200 text-lg font-bold mb-2 ml-10">
            Title
          </label>
          <input
            type="text"
            className="ml-10 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-half text-lg border-gray-300 rounded-md bg-green-100 text-green-900"
            defaultValue={trip?.title || ""}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className="mb-8 ml-10">
          <label className="block text-green-200 text-lg font-bold mb-2">
            City
          </label>
          <input
            type="text"
            className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-half text-lg border-gray-300 rounded-md bg-green-100 text-green-900"
            defaultValue={trip?.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
        <div className="mb-8 ml-10">
          <label className="block text-green-200 text-lg font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-half text-lg border-gray-300 rounded-md bg-green-100 text-green-900"
            defaultValue={trip?.start_date || ""}
            onChange={(e) => handleChange("start_date", e.target.value)}
          />
        </div>
        <div className="mb-8 ml-10">
          <label className="block text-green-200 text-lg font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            min={trip?.start_date}
            className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-half text-lg border-gray-300 rounded-md bg-green-100 text-green-900"
            defaultValue={trip?.end_date || ""}
            onChange={(e) => handleChange("end_date", e.target.value)}
          />
        </div>
        <button
          className="ml-10 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-xl mb-8"
          onClick={handleSubmit}
        >
          Save
        </button>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            {allDays
              ?.filter((day) => day.trip?.id === Number(id))
              .map((day: Day) => (
                <DayColumn key={day.id} day={day} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

EditTrip.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
