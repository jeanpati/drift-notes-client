import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function createDay(tripId: number, date: string) {
  return fetchWithResponse("days", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ trip: tripId, date: date }),
  });
}

export function getDayById(dayId: number) {
  return fetchWithResponse(`days/${dayId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getAllDays() {
  return fetchWithResponse("days", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function deleteDay(dayId: number) {
  return fetchWithoutResponse(`days/${dayId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
