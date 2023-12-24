import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSessions } from "../../services/sessions";

const StartSession: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["sessions"],
    queryFn: () => getSessions({ id: 1 }),
    refetchInterval: 2000, // Set the interval in milliseconds (e.g., 5000ms or 5s)
    staleTime: 10000, // Set the time in milliseconds after which the data is considered stale
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return <div>StartSession</div>;
};

export default StartSession;
