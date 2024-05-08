import React from "react";
import { Event } from "../../data/events";
import { Category } from "../day/card";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../data/categories";

interface EventProps {
  event: Event;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    eventData: Event
  ) => void;
  isDragging: boolean;
}

export function EventCard({ event, onDragStart, isDragging }: EventProps) {
  const categoryId = event.category?.id;
  const {
    data: category,
    isLoading: isLoadingCategory,
    error: categoryError,
  } = useQuery<Category>({
    queryKey: ["category", categoryId],
    queryFn: () => categoryId && getCategoryById(Number(categoryId)),
    enabled: !!categoryId,
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    onDragStart(e, event);
  };

  return (
    <div
      className={`bg-blue-200 text-blue-800 p-2 rounded-md mb-2 ${
        isDragging ? "opacity-50 cursor-move" : ""
      }`}
      onDragStart={handleDragStart}
      draggable
    >
      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
      {event.location && (
        <p className="text-sm text-gray-600 mb-2">Location:{event.location}</p>
      )}
      <p className="text-sm text-gray-600">
        {event.start_time} - {event.end_time}
      </p>
      {category && (
        <p className="text-sm text-gray-600 mb-2">{category.name}</p>
      )}
    </div>
  );
}
