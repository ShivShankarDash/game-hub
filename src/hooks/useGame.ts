import { useQuery } from "@tanstack/react-query";
import { SiBoulanger } from "react-icons/si";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
