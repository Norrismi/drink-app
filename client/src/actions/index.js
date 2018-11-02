import axios from "axios";

export function getDrinks(limit = 10, start = 0, order = "asc", list = "") {
  const request = axios
    .get(`/api/drinks?limit=${limit}&skip=${start}&order=${order}`)
    .then(res => {
      if (list) {
        return [...list, ...res.data];
      } else {
        return res.data;
      }
    });

  return {
    type: "GET_DRINKS",
    payload: request
  };
}

export function getDrinkReviewer(id) {
  const request = axios.get(`/api/getDrink?id=${id}`);

  return dispatch => {
    request.then(({ data }) => {
      let drink = data;

      axios.get(`/api/getReviewer?id=${drink.ownerId}`).then(({ data }) => {
        let drinkRes = {
          drink,
          reviewer: data
        };

        dispatch({
          type: "GET_DRINK_REVIEWER",
          payload: drinkRes
        });
      });
    });
  };
}

export function clearDrinkReview() {
  return {
    type: "CLEAR_DRINK_REVIEW",
    payload: {
      drink: {},
      reviewer: {}
    }
  };
}

export function addDrink(drink) {
  const request = axios.post("/api/drink", drink).then(res => res.data);

  return {
    type: "ADD_DRINK",
    payload: request
  };
}

export function clearDrinkSubmission() {
  return {
    type: "CLEAR_DRINK_SUBMISSION",
    payload: {}
  };
}

export function getDrink(id) {
  const request = axios.get(`/api/getDrink?id=${id}`).then(res => res.data);

  return {
    type: "GET_DRINKS",
    payload: request
  };
}

export function updateDrink(data) {
  const request = axios.post(`/api/drink_update`, data).then(res => res.data);
  return {
    type: "UPDATE_DRINK",
    payload: request
  };
}

export function deleteDrink(id) {
  const request = axios
    .delete(`/api/delete_drink?id=${id}`)
    .then(res => res.data);
  return {
    type: "DELETE_DRINK",
    payload: request
  };
}

export function clearDrink() {
  return {
    type: "CLEAR_DRINK",
    payload: {
      drink: null,
      updateDrink: false,
      postDeleted: false
    }
  };
}

/*==========USER============*/

export function loginUser({ email, password }) {
  const request = axios
    .post(`/api/login`, { email, password })
    .then(res => res.data);

  return {
    type: "LOGIN_USER",
    payload: request
  };
}

export function auth() {
  const request = axios.get(`/api/auth`).then(res => res.data);
  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function getUserPosts(userId) {
  const request = axios
    .get(`/api/user_posts?user=${userId}`)
    .then(res => res.data);
  return {
    type: "GET_USER_POSTS",
    payload: request
  };
}

export function getUsers() {
  const request = axios.get(`/api/users`).then(res => res.data);
  return {
    type: "GET_USERS",
    payload: request
  };
}

export function userRegister(user, userList) {
  const request = axios.post(`/api/register`, user);

  return dispatch => {
    request.then(({ data }) => {
      let users = data.success ? [...userList, data.user] : userList;
      let response = {
        success: data.success,
        users
      };
      dispatch({
        type: "USER_REGISTER",
        payload: response
      });
    });
  };
}
