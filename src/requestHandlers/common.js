import { SERVER_URL } from "../common/constants/profile";

export const getAddServiceOptions = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

export const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;
