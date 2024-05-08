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

export default function TripDetails() {
  const queryClient = useQueryClient();
  const [showInviteModal, setShowInviteModal] = useState(false);
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{trip?.title}</h1>
      <p className="text-gray-600 mb-8">
        {trip?.city} | {formatDate(trip?.start_date)} -{" "}
        {formatDate(trip?.end_date)}
      </p>
      <div className="grid grid-cols-7 gap-4">
        {allDays
          ?.filter((day) => day.trip?.id === Number(id))
          .map((day: Day) => (
            <DayColumn key={day.id} day={day} onEventDrop={handleEventDrop} />
          ))}
      </div>
      <Modal
        showModal={showInviteModal}
        setShowModal={setShowInviteModal}
        title="Invite User"
      >
        <form>{/* User invitation form */}</form>
      </Modal>
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
