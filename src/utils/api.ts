import coalitionApi from "./coalitionApiConfig";

export const getPatients = async () => {
  const response = await coalitionApi.get("");
  return response?.data;
};
