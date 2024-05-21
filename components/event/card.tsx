import React from "react";
import { Event, deleteEvent } from "../../data/events";
import { Category } from "../day/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryById } from "../../data/categories";

interface EventProps {
  event: Event;
  startTime?: string;
  endTime?: string;
  style?: React.CSSProperties;
}

export function EventCard({ event, startTime, endTime, style }: EventProps) {
  const categoryId = event.category?.id;
  const { data: category } = useQuery<Category>({
    queryKey: ["category", categoryId],
    queryFn: () => getCategoryById(Number(categoryId)),
    enabled: !!categoryId,
  });

  const formatTime = (time: string | undefined): string => {
    if (!time) return "";
    const date = new Date(`2000-01-01T${time}`);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };

  const startDate = new Date(`2000-01-01T${startTime}`);
  const endDate = new Date(`2000-01-01T${endTime}`);

  const startHour = startDate.getHours();
  const endHour = endDate.getHours();
  const startMinute = startDate.getMinutes();
  const endMinute = endDate.getMinutes();

  const handleDelete = async (eventId: number) => {
    await deleteEventMutation(eventId);
  };

  const queryClient = useQueryClient();

  const { mutateAsync: deleteEventMutation } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (error: any) => {
      console.error("Error deleting event:", error);
    },
  });

  return (
    <div
      className="event-card bg-pink-200 text-green-900 rounded-md px-4 py-2 overflow-y-auto"
      style={{
        ...style,
        top: `calc(${(startHour - 4) * 40}px + ${(startMinute / 60) * 40}px)`,
        height: `calc(${(endHour - startHour) * 40}px + ${
          ((endMinute - startMinute) / 60) * 40
        }px)`,
      }}
    >
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>

      <p className="text-lg">
        {formatTime(startTime)} - {formatTime(endTime)}
      </p>
      <div>
        {event.location && (
          <p className="text-base text-green-800 mb-2">
            Location: {event.location}
          </p>
        )}
        {category && (
          <p className="text-base text-green-800 mb-2">{category.name}</p>
        )}
        <button
          onClick={() => {
            if (event.id !== undefined) {
              handleDelete(event.id);
            }
          }}
          className="bg-red-500 text-white px-3 py-1 rounded-md mt-2 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
