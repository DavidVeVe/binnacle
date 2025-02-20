import { getAddServiceOptions, getProfileUrl } from "./common";

export const postNewService = async (profileId, bodyObj) => {
  try {
    const response = await fetch(
      `${getProfileUrl(profileId)}/addService`,
      getAddServiceOptions({ id: profileId, data: bodyObj })
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
