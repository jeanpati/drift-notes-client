import { fetchWithoutResponse, fetchWithResponse } from "./fetcher";

export interface User {
  id?: number;
  url?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export function getUserById(userId: number) {
  return fetchWithResponse(`users/${userId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getAllUsers() {
  return fetchWithResponse("users", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function updateUser(userId: number, userData: User) {
  return fetchWithoutResponse(`users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(userData),
  });
}
