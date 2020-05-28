const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then((res) => res.json());
};

const createNewUser = (username, password, confirmPassword) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user: { username, password, password_confirmation: confirmPassword },
    }),
  }).then((res) => res.json());
};

const fetchSavedShows = () => {
  return fetch("http://localhost:3000/api/v1/saved_shows", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  }).then((resp) => resp.json());
};

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
    createNewUser: createNewUser,
  },
  show: {
    fetchSavedShows: fetchSavedShows,
  },
};
