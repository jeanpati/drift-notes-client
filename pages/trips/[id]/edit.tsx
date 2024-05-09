import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "../../../components/modal";
import { getTripById, Trip, updateTrip } from "../../../data/trips";
import { getAllDays } from "../../../data/days";
import { updateEvent, Event, getAllEvents } from "../../../data/events";
import { DayColumn, Day } from "../../../components/day/card";
import UserTripModal from "../../../components/usertrip/form-modal";

export default function EditTrip() {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const {
    data: trip,
    isLoading: isLoadingTrip,
    error: tripError,
  } = useQuery<Trip>({
    queryKey: ["trip"],
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

  // Runs a function to update an event's data
  const { mutateAsync: updateEventMutation } = useMutation({
    mutationFn: updateEvent,
  });

  // Runs a function to update a trip's data
  const { mutateAsync: updateTripMutation } = useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip"] });
    },
  });

  const [updatedData, setUpdatedData] = useState<Trip | null>(null);

  // Function to handle form data changes
  const handleChange = (field: string, value: any) => {
    setUpdatedData((prevUpdatedData) => ({
      ...prevUpdatedData,
      [field]: value,
    }));
  };

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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Trip</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={updatedData?.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <input
          type="text"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={updatedData?.city || ""}
          onChange={(e) => handleChange("city", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Start Date
        </label>
        <input
          type="date"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={updatedData?.start_date || ""}
          onChange={(e) => handleChange("start_date", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          End Date
        </label>
        <input
          type="date"
          min={updatedData?.start_date}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={updatedData?.end_date || ""}
          onChange={(e) => handleChange("end_date", e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          handleSubmit;
        }}
      >
        Save
      </button>
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
