export const API_BASE_URL = "http://localhost:8000/api/v1";

export const logInLocalHandler = (user) => {
  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("loggedIn", "T");
};

export const logOutLocalHandler = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("loggedIn");
};
