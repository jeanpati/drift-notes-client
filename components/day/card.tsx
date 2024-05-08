import {
  useQueryClient,
  useQuery,
  useMutation,
  QueryKey,
} from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Trip } from "../../data/trips";
import { getDayById } from "../../data/days"; // Importing getDayById function
import {
  getAllEvents,
  Event,
  updateEvent,
  createEvent,
} from "../../data/events"; // Importing getAllEvents and updateEvent functions
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
  onEventDrop: (
    event: Event,
    day: number,
    start_time: string,
    end_time: string
  ) => void;
}

export function DayColumn({ day, onEventDrop }: DayColumnProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    data: dayData,
    isLoading: isDayLoading,
    isError: isDayError,
  } = useQuery<Day, Error>({
    queryKey: ["day", day.id],
    queryFn: () => getDayById(day.id), // Using getDayById function
  });

  const {
    data: allEventsData,
    isLoading: isEventLoading,
    isError: isEventError,
  } = useQuery<Event[], Error>({
    queryFn: getAllEvents, // Fetching all events
    queryKey: ["events"], // Change the queryKey to an array
  });

  const { data: categories } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["categories"],
  });

  const queryClient = useQueryClient();

  const { mutateAsync: createEventMutation } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
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

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 4; hour <= 27; hour++) {
      const time = new Date(0, 0, 0, hour % 24)
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
        })
        .toLowerCase();
      timeSlots.push(time);
    }
    return timeSlots;
  };

  const timeSlots = generateTimeSlots();
  const getEventStartIndex = (startTime: string) => {
    const [hours, minutes] = startTime.split(":").map((val) => parseInt(val));
    return hours - 4 + minutes / 60;
  };

  return (
    <div className="border rounded-lg p-4 relative">
      <h2 className="text-xl font-bold mb-2">
        {new Date(day.date).toLocaleDateString()}
      </h2>
      <div className="border rounded-lg p-4">
        <EventModal
          showModal={showModal}
          setShowModal={setShowModal}
          dayId={day.id}
          createEventMutation={createEventMutation}
          categories={categories || []} // Pass the categories data or an empty array
        />
      </div>
      <div className="grid grid-cols-4 gap-2 relative">
        {timeSlots.map((timeSlot, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute left-0 w-20"
              style={{ top: `${index * 40}px`, zIndex: 1 }}
            >
              {timeSlot}
            </div>
          </React.Fragment>
        ))}
        <div className="grid grid-cols-1 gap-2 ml-20 col-span-3 overflow-x-auto">
          {allEventsData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDragStart={(e, eventData) => {
                // Implement your drag start logic here
              }}
              isDragging={false} // You can set this dynamically if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
}
