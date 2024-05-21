import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTripById, Trip, updateTrip } from "../../../data/trips";
import { getAllDays } from "../../../data/days";
import { Event, getAllEvents } from "../../../data/events";
import { DayColumn, Day } from "../../../components/day/card";
import Modal from "../../../components/modal";
import { Input } from "../../../components/form-elements";

export default function EditTrip() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [updatedData, setUpdatedData] = useState<Trip | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      setUpdatedData((prevData) => ({
        ...prevData,
        id: Number(id),
      }));
    }
  }, [id]);

  // Fetch trip, days, and events data
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

  // Mutation to update trip data
  const { mutateAsync: updateTripMutation } = useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip"] });
    },
  });

  // Handle form submission
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
    <div className="w-full flex flex-col min-h-screen items-center justify-between pt-40">
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Edit Trip"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="title"
              label="Title"
              placeholder="Trip Title"
              defaultValue={trip?.title || ""}
              onChangeEvent={(e) => handleChange("title", e.target.value)}
            />
            <Input
              id="city"
              label="City"
              placeholder="City"
              defaultValue={trip?.city || ""}
              onChangeEvent={(e) => handleChange("city", e.target.value)}
            />
            <Input
              id="start_date"
              label="Start Date"
              type="date"
              defaultValue={trip?.start_date || ""}
              onChangeEvent={(e) => handleChange("start_date", e.target.value)}
            />
            <Input
              id="end_date"
              label="End Date"
              type="date"
              min={trip?.start_date}
              defaultValue={trip?.end_date || ""}
              onChangeEvent={(e) => handleChange("end_date", e.target.value)}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      )}

      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
        onClick={() => setShowModal(true)}
      >
        Edit Trip
      </button>

      <div className="overflow-x-auto mt-8">
        <div className="flex space-x-6">
          {allDays
            ?.filter((day) => day.trip?.id === Number(id))
            .map((day: Day) => (
              <DayColumn key={day.id} day={day} />
            ))}
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
