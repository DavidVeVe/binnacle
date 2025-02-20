import { getProfileUrl } from "./common";

export const getProfiles = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

export const getSingleProfile = async (profileId) => {
  const response = await fetch(getProfileUrl(profileId));
  return await response.json();
};
