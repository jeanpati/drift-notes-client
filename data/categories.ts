import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getAllCategories() {
  return fetchWithResponse("categories", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function getCategoryById(id: number) {
  return fetchWithResponse(`categories/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function createCategory(name: string) {
  return fetchWithResponse("categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name: name }),
  });
}

export function deleteCategory(id: number) {
  return fetchWithoutResponse(`categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
