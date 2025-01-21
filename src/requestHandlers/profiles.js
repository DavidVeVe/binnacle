export const getProfiles = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

export const getSingleProfile = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};
