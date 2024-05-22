const API_URL = "https://app.driftnotes.com";

const checkError = (res: Response) => {
  if (!res.ok) {
    if (res.status === 204) {
      return;
    }
    throw Error(res.status.toString());
  }
  return res;
};

const checkErrorJson = (res: Response) => {
  if (res.status === 200 || res.status === 201) {
    return res.json();
  } else {
    throw Error(res.status.toString());
  }
};

const catchError = (err: Error) => {
  if (err.message === "401") {
    window.location.href = "/login";
  }
  if (err.message === "404") {
    throw Error(err.message);
  }
  if (err.message === "400") {
    return;
  }
  throw err;
};

export const fetchWithResponse = (resource: string, options?: RequestInit) =>
  fetch(`${API_URL}/${resource}`, options)
    .then(checkErrorJson)
    .catch(catchError);

export const fetchWithoutResponse = (resource: string, options?: RequestInit) =>
  fetch(`${API_URL}/${resource}`, options).then(checkError).catch(catchError);

export const fetchIgnore404 = (resource: string, options?: RequestInit) =>
  fetch(`${API_URL}/${resource}`, options).then((res) => {
    if (res.status === 404) {
      return res.json();
    } else {
      return checkErrorJson(res).catch(catchError);
    }
  });
