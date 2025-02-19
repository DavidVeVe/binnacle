import { SERVER_URL } from "../common/constants/profile";

export const getProfiles = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

export const getSingleProfile = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const getAddServiceOptions = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

export const postNewService = async (profileId, bodyObj) => {
  try {
    const response = await fetch(
      `${SERVER_URL}/profile/${profileId}/addService`,
      getAddServiceOptions({ id: profileId, data: bodyObj })
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;
