import { GetApiData } from "utils/http-client";
export const LoginForm = function (data) {
  return GetApiData(`/user/login`, "POST", data, true);
};
export const UsersCreate = function (data) {
  return GetApiData(`/user/sign-up`, "POST", data, true);
};
export const GetAllUser = function (query) {
  return GetApiData(`/user/get-users?search=${query}`, "GET", null, true);
};
export const UserStatus = function (id,status) {
  return GetApiData(`/user/update-status/${id}`, "PUT", {
    "status" : status
}, true);
};

export const UserDelete = function (id) {
  return GetApiData(`/user/delete-user/${id}`, "Delete", null, true);
};


export const ForgotPasswordService = function (email) {
  return GetApiData(`/user/forget-password`, "POST", email, true);
};
export const ResetPasswordService = function (data) {
  return GetApiData(`/user/reset-password`, "POST", data, true);
};
export const OTPCheck = function (data) {
  return GetApiData(`/user/verify-otp`, "POST", data, true);
};
