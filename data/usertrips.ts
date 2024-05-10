import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export interface UserTrip {
  id?: number;
  user?: number;
  trip?: number;
}

export function createUserTrip(userData: UserTrip) {
  return fetchWithResponse("usertrips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(userData),
  });
}

export function getUserTripById(userTripId: number) {
  return fetchWithResponse(`usertrips/${userTripId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getAllUserTrips() {
  return fetchWithResponse("usertrips", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function deleteUserTrip(userTripId: number) {
  return fetchWithoutResponse(`usertrips/${userTripId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
