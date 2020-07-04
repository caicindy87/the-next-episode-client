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

const getCurrentUser = (token) => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: { ...headers, Authorization: token },
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

const fetchSavedShows = (token, user) => {
  return fetch(`${API_ROOT}/users/${user.id}/saved_shows`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
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
