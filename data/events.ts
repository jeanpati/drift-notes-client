import { Category, Day } from "../components/day/card";
import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export interface Event {
  id?: number;
  day?: Day;
  title?: string;
  location?: string;
  start_time?: string;
  end_time?: string;
  category?: Category;
}

export function createEvent(event: Event): Promise<Event> {
  return fetchWithResponse("events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(event),
  });
}

export function getEventById(eventId: number) {
  return fetchWithResponse(`events/${eventId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getAllEvents() {
  return fetchWithResponse("events", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function updateEvent(event: Event): Promise<Event> {
  return fetchWithResponse(`events/${event.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(event),
  });
}

export function deleteEvent(eventId: string) {
  return fetchWithoutResponse(`events/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
