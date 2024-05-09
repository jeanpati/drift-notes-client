import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Trip } from "../../data/trips";
import { getDayById } from "../../data/days"; // Importing getDayById function
import { getAllEvents, Event, createEvent } from "../../data/events"; // Importing getAllEvents and updateEvent functions
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
export function DayCarousel({ days }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {days.map((day: any) => (
        <div key={day.id} className="bg-white rounded-lg shadow-md">
          <DayColumn day={day} />
        </div>
      ))}
    </div>
  );
}

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
  //   const [isDragging, setIsDragging] = useState(false);
  //   const [draggedEvent, setDraggedEvent] = useState<Event | null>(null);

  //   const handleDragStart = (
  //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //     tripEvent: Event
  //   ) => {
  //     setIsDragging(true);
  //     setDraggedEvent(tripEvent);
  //   };

  //   const handleDragEnd = (
  //     newDayId: number,
  //     newStartTime: string,
  //     newEndTime: string
  //   ) => {
  //     setIsDragging(false);

  //     if (!draggedEvent) return; // Check if draggedEvent exists

  //     updateEvent({
  //       ...draggedEvent,
  //       day: newDayId,
  //       start_time: newStartTime,
  //       end_time: newEndTime,
  //     }).then(() => {
  //       onEventDrop(draggedEvent, newDayId, newStartTime, newEndTime);
  //     });
  //   };

  if (isDayLoading || isEventLoading) return <div>Loading...</div>;
  if (isDayError || isEventError || !dayData || !allEventsData)
    return <div>Error fetching data</div>;

  // const generateTimeSlots = () => {
  //   const timeSlots = [];
  //   for (let hour = 4; hour <= 27; hour++) {
  //     const time = new Date(0, 0, 0, hour % 24)
  //       .toLocaleTimeString("en-US", {
  //         hour: "numeric",
  //         hour12: true,
  //       })
  //       .toLowerCase();
  //     timeSlots.push(time);
  //   }
  //   return timeSlots;
  // };

  // const timeSlots = generateTimeSlots();
  // const getEventStartIndex = (startTime: string) => {
  //   const [hours, minutes] = startTime.split(":").map((val) => parseInt(val));
  //   return hours - 4 + minutes / 60;
  // };

  return (
    <div className="border rounded-lg p-4 relative">
      <h2 className="text-xl font-bold mb-2">
        {new Date(day.date).toLocaleDateString()}
      </h2>
      <>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
            categories={categories || []} // Pass the categories data or an empty array
          />
        )}
      </>

      {/* <div className="grid grid-cols-4 gap-2 relative">
        {timeSlots.map((timeSlot, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute left-0 w-20"
              style={{ top: `${index * 40}px`, zIndex: 1 }}
            >
              {timeSlot}
            </div>
          </React.Fragment>
        ))} */}
      <div className="grid grid-cols-1 col-span-4 overflow-x-auto relative">
        {allEventsData
          .filter((event) => event.day?.id === day.id)
          .map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDragStart={(e, eventData) => {
                // drag start logic here
              }}
              isDragging={false}
            />
          ))}
      </div>
    </div>
    // </div>
  );
}
