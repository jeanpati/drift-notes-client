import { fetchWithResponse } from "./fetcher";

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
export interface LogInUser {
  username: string;
  password: string;
}

export function login(user: LogInUser) {
  return fetchWithResponse("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function register(user: RegisterUser) {
  return fetchWithResponse("register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function getUserProfile() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw Error("Missing authorization token");
  }
  return fetchWithResponse("profile", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
}
