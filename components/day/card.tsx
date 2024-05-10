import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Trip } from "../../data/trips";
import { getDayById } from "../../data/days";
import { getAllEvents, Event, createEvent } from "../../data/events";
import { EventCard } from "../event/card";
import { getAllCategories } from "../../data/categories";
import EventModal from "../event/form-modal";

export interface Day {
  id: number;
  trip: Trip | null;
  date: string;
}

export interface Category {
  id: any;
  name: string;
}

export interface DayColumnProps {
  day: Day;
}

const TimeSlots = () => {
  const times = [];
  for (let hour = 4; hour < 28; hour++) {
    const time = hour > 23 ? `${hour - 24}:00` : `${hour}:00`;
    times.push(
      <div key={time} className="time-slot text-emerald-900 font-bold">
        {time}
      </div>
    );
  }
  return <div className="time-column">{times}</div>;
};

export function DayColumn({ day }: DayColumnProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    data: dayData,
    isLoading: isDayLoading,
    isError: isDayError,
  } = useQuery<Day, Error>({
    queryKey: ["day", day.id],
    queryFn: () => getDayById(day.id),
  });
  const {
    data: allEventsData,
    isLoading: isEventLoading,
    isError: isEventError,
  } = useQuery<Event[], Error>({
    queryFn: getAllEvents,
    queryKey: ["events"],
  });
  const { data: categories } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["categories"],
  });
  const queryClient = useQueryClient();
  const { mutateAsync: createEventMutation } = useMutation({
    mutationFn: createEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["events"] });
      setShowModal(false);
    },
  });

  if (isDayLoading || isEventLoading) return <div>Loading...</div>;
  if (isDayError || isEventError || !dayData || !allEventsData)
    return <div>Error fetching data</div>;

  const eventsForDay = allEventsData
    .filter(
      (event) => event.day?.id === day.id && event.start_time && event.end_time
    )
    .sort((a, b) => {
      if (a.start_time && b.start_time) {
        return (
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        );
      }
      return 0;
    })
    .map((event) => ({
      ...event,
      startHour: event.start_time ? new Date(event.start_time).getHours() : 0,
      endHour: event.end_time ? new Date(event.end_time).getHours() : 0,
    }));

  return (
    <div className="bg-green-200 day-column border border-solid border-green-900 rounded-2xl w-1/4 min-w-96 p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-900">
        {day.date ? new Date(day.date).toLocaleDateString() : ""}
      </h2>
      <div className="mb-4">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md text-lg"
          onClick={() => setShowModal(true)}
        >
          Create Event
        </button>
        {showModal && (
          <EventModal
            showModal={showModal}
            setShowModal={setShowModal}
            dayId={day.id}
            createEventMutation={createEventMutation}
            categories={categories || []}
          />
        )}
      </div>
      <div className="day-grid">
        <div className="time-column">
          <TimeSlots />
        </div>
        <div className="event-column grid grid-cols-1 gap-4 relative">
          {eventsForDay.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              startTime={event.start_time}
              endTime={event.end_time}
              style={
                {
                  "--start-hour": event.startHour,
                  "--end-hour": event.endHour,
                  className: "event-card",
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
