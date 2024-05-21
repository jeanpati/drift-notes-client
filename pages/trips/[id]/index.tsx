import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "../../../components/modal";
import { getTripById, Trip } from "../../../data/trips";
import { getAllDays } from "../../../data/days";
import { updateEvent, Event, getAllEvents } from "../../../data/events";
import { DayColumn, Day } from "../../../components/day/card";
import UserTripModal from "../../../components/usertrip/form-modal";

export default function TripDetails() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
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

  // Runs a function to update an event's data
  const { mutateAsync: updateEventMutation } = useMutation({
    mutationFn: updateEvent,
  });

  // Updates an event's day and times when dropping an event
  const handleEventDrop = async (
    event: Event,
    newDayId: number,
    newStartTime: string,
    newEndTime: string
  ) => {
    if (event.id === undefined) {
      throw new Error("Event ID is undefined");
    }

    const updatedEvent = {
      ...event,
      day_id: newDayId,
      start_time: newStartTime,
      end_time: newEndTime,
    };

    try {
      await updateEventMutation(updatedEvent);
    } catch (error) {
      console.error("An error occurred while updating the event:", error);
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
  const handleUpdate = (id: any) => {
    router.push(`/trips/${id}/edit`);
  };

  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-between pt-40">
      <div className="max-w-8xl w-full px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:flex-1 rounded-lg shadow-lg p-6 w-full">
              <div className="flex justify-end mb-8">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl mr-4"
                  onClick={() => setShowModal(true)}
                >
                  +Users
                </button>
                {showModal && (
                  <UserTripModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    tripId={Number(id)}
                  />
                )}
              </div>
              <h1 className="text-5xl font-bold mb-6 text-center text-orange-500">
                {trip?.title}
              </h1>
              <p className="text-2xl text-gray-600 mb-10 text-center">
                {trip?.city} | {formatDate(trip?.start_date)} -{" "}
                {formatDate(trip?.end_date)}
              </p>
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => {
                    handleUpdate(trip.id);
                  }}
                  className="outline outline-cyan-500 hover:bg-cyan-100 text-cyan-600 font-bold py-2 px-4 rounded text-lg"
                >
                  edit
                </button>
              </div>
              <div className="overflow-x-auto">
                <div className="flex space-x-6">
                  {allDays
                    ?.filter((day) => day.trip?.id === Number(id))
                    .sort(
                      (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    )
                    .map((day: Day) => (
                      <DayColumn key={day.id} day={day} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TripDetails.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
