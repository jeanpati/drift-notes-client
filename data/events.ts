import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export interface Event {
  id?: number;
  day: number;
  title: string;
  location?: string;
  start_time?: string;
  end_time?: string;
  category?: number;
}

export function createEvent(event: Event) {
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

export function updateEvent(eventId: number, event: Event) {
  return fetchWithResponse(`events/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(event),
  });
}

export function deleteEvent(eventId: number) {
  return fetchWithoutResponse(`events/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
