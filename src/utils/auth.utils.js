
export function AuthHeader() {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return loggedInUser && loggedInUser?.token
    ? { "x-access-token": loggedInUser?.token }
    : {};
}
export const GetUserRoles = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return loggedInUser?.role || [];
};
export const AuthName = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return loggedInUser || "User";
};


export const AuthVerify = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  if (loggedInUser) {
    return true;
  } else return false;
};
