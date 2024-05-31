import React, { useState } from "react";
import { Event, deleteEvent } from "../../data/events";
import { Category } from "../day/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryById } from "../../data/categories";

interface EventProps {
  event: Event;
  startTime?: string;
  endTime?: string;
  style?: React.CSSProperties;
  overlappingIndex?: number;
  totalOverlaps?: number;
}

export function EventCard({
  event,
  startTime,
  endTime,
  style,
  overlappingIndex = 0,
  totalOverlaps = 1,
}: EventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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
      className={`event-card bg-rose-50 text-emerald-900 rounded-md px-4 py-2 absolute ${
        isExpanded ? "z-10 h-auto" : "overflow-hidden"
      }`}
      style={{
        top: `calc(${startHour * 40}px + ${(startMinute / 60) * 40}px)`,
        height: isExpanded
          ? "auto"
          : `calc(${(endHour - startHour) * 40}px + ${
              ((endMinute - startMinute) / 60) * 40
            }px)`,
        minHeight: "40px",
        left: `${overlappingIndex * (100 / totalOverlaps)}%`,
        width: `calc(${100 / totalOverlaps}% - 10px)`,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (event.id !== undefined) {
            handleDelete(event.id);
          }
        }}
        className="text-slate-400 px-2 py-1 rounded-md text-xs absolute top-1 right-1 bg-opacity-80 hover:bg-red-500"
      >
        x
      </button>
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-lg">
        {formatTime(startTime)} - {formatTime(endTime)}
        {event.location && (
          <p className="text-base text-green-800 mb-2">
            Location: {event.location}
          </p>
        )}
        {category && (
          <p className="text-base text-green-800 mb-2">{category.name}</p>
        )}
      </p>
      <div className={`event-details ${isExpanded ? "block" : "hidden"}`}></div>
    </div>
  );
}
