import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
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
  for (let hour = 0; hour < 24; hour++) {
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
    .sort(
      (a, b) =>
        new Date(a.start_time!).getTime() - new Date(b.start_time!).getTime()
    );

  // create groups to ensure events dont overlap with each other
  // every event belongs in a group
  const calculateOverlaps = (events: Event[]) => {
    const groups: Event[][] = [];
    const overlaps = new Map<
      Event,
      { overlappingIndex: number; totalOverlaps: number }
    >();

    events.forEach((event) => {
      let placed = false;

      for (const group of groups) {
        if (!group.some((other) => isOverlapping(event, other))) {
          group.push(event);
          placed = true;
          break;
        }
      }

      if (!placed) {
        groups.push([event]);
      }
    });

    groups.forEach((group) => {
      group.forEach((event, index) => {
        overlaps.set(event, {
          overlappingIndex: index,
          totalOverlaps: group.length,
        });
      });
    });

    return overlaps;
  };

  const isOverlapping = (event1: Event, event2: Event) => {
    if (
      !event1.start_time ||
      !event1.end_time ||
      !event2.start_time ||
      !event2.end_time
    ) {
      return false;
    }

    const start1 = new Date(event1.start_time).getTime();
    const end1 = new Date(event1.end_time).getTime();
    const start2 = new Date(event2.start_time).getTime();
    const end2 = new Date(event2.end_time).getTime();

    return start1 < end2 && end1 > start2;
  };

  const overlapMap = calculateOverlaps(eventsForDay);

  const eventGroups: Event[][] = [];
  eventsForDay.forEach((event) => {
    let placed = false;
    for (const group of eventGroups) {
      if (group.some((groupEvent) => isOverlapping(event, groupEvent))) {
        group.push(event);
        placed = true;
        break;
      }
    }
    if (!placed) {
      eventGroups.push([event]);
    }
  });

  const eventsWithPositions = eventGroups.flatMap((group) => {
    const overlapMap = calculateOverlaps(group);
    return group.map((event) => ({
      ...event,
      overlappingIndex: overlapMap.get(event)?.overlappingIndex ?? 0,
      totalOverlaps: overlapMap.get(event)?.totalOverlaps ?? 1,
    }));
  });

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}/${year}`;
  };

  const eventsByTimeSlot = new Map<string, Event[]>();
  eventsForDay.forEach((event) => {
    const startTimeSlot = event.start_time?.substring(0, 2) || "";
    if (!eventsByTimeSlot.has(startTimeSlot)) {
      eventsByTimeSlot.set(startTimeSlot, []);
    }
    eventsByTimeSlot.get(startTimeSlot)?.push(event);
  });

  const eventsWithPositionsByTimeSlot: Map<string, Event[]> = new Map();
  eventsByTimeSlot.forEach((events, timeSlot) => {
    const overlapMap = calculateOverlaps(events);
    const eventsWithPositions = events.map((event) => ({
      ...event,
      overlappingIndex: overlapMap.get(event)?.overlappingIndex ?? 0,
      totalOverlaps: overlapMap.get(event)?.totalOverlaps ?? 1,
    }));
    eventsWithPositionsByTimeSlot.set(timeSlot, eventsWithPositions);
  });

  return (
    <div className="bg-green-50 day-column border border-solid border-green-900 rounded-2xl w-1/4 min-w-96 p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-900">
        {day.date ? formatDate(day.date) : ""}
      </h2>
      <div className="mb-4">
        <button
          className="flex outline outline-yellow-300 bg-yellow-50 hover:bg-rose-50 text-black font-bold py-2 px-4 rounded text-lg m-5 self-center"
          onClick={() => setShowModal(true)}
        >
          create event
        </button>
        {showModal && (
          <EventModal
            showModal={showModal}
            setShowModal={setShowModal}
            dayId={day.id}
            createEventMutation={createEventMutation}
            categories={categories || []}
            eventsForDay={eventsWithPositions}
          />
        )}
      </div>
      <div className="day-grid">
        <div className="time-column">
          <TimeSlots />
        </div>
        <div className="event-column grid grid-cols-1 gap-4 relative">
          {Array.from(eventsWithPositionsByTimeSlot.entries()).map(
            ([timeSlot, eventsWithPositions]) => (
              <div key={timeSlot}>
                {eventsWithPositions.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    startTime={event.start_time}
                    endTime={event.end_time}
                    overlappingIndex={event.overlappingIndex}
                    totalOverlaps={event.totalOverlaps}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
