import { useEffect, useState } from "react";
import HairService from "../model/hair-service";

interface UseFetchResult {
  services: HairService[] | null;
  isPending: boolean;
  error: string | null;
}
const servicesFetch = (uri: string): UseFetchResult => {
  const [services, setService] = useState<HairService[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(uri)
        .then(res => {
          if(!res.ok) {
            throw Error('Invalid data.');
          }

          return res.json();
        })
        .then(services => {
          setService(services.HairServices);
          setIsPending(false);
          setError(null);
          console.log(services.State);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 1000);
  }, [uri]);

  return { services, isPending, error };
}

export default servicesFetch;