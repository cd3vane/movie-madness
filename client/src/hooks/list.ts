import { useQuery } from "react-query";
import { api } from "../utils/api";

const getListByUserId = async (id: string) => {
  const { data } = await api.get(`list/${id}`);
  return data;
};

export function useList() {
  return useQuery("lists", async () => {
    const { data } = await api.get("/lists");
    return data;
  });
}

export function useLists(userId: string) {
  return useQuery(["list", userId], () => getListByUserId(userId), {
    enabled: !!userId,
  });
}
