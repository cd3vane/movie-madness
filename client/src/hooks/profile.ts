import { useQuery } from "react-query";
import { api } from "../utils/api";

const getProfileById = async (id: string) => {
  const { data } = await api.get(`profile/${id}`);
  return data;
};

export function useProfiles() {
  return useQuery("profiles", async () => {
    const { data } = await api.get("/profile");
    return data;
  });
}

export function useProfile(profileId: string) {
  return useQuery(["profile", profileId], () => getProfileById(profileId), {
    enabled: !!profileId,
  });
}
