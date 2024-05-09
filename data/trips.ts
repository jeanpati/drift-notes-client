import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";
import { User } from "./users";

export interface Trip {
  id?: number;
  creator?: User;
  title?: string;
  city?: string;
  start_date?: string;
  end_date?: string;
}

export function createTrip(trip: Trip) {
  return fetchWithResponse("trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(trip),
  });
}

export function getTripById(tripId: number) {
  return fetchWithResponse(`trips/${tripId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getAllTrips() {
  return fetchWithResponse("trips", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function updateTrip(trip: Trip) {
  return fetchWithResponse(`trips/${trip.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(trip),
  });
}

export function deleteTrip(tripId: number) {
  return fetchWithoutResponse(`trips/${tripId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
