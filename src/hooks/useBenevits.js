import { useState, useEffect } from "react";
import { getBenevits, searchBenevits } from "../apis";

export function useBenevits() {
  const [benevits, setBenevits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getBenevits();
    setIsLoading(true);
    if (response.data.locked.length > 0) {
      response.data.locked.map((item) => {
        item.type = "locked";
        return item;
      });
    }
    if (response.data.unlocked.length > 0) {
      response.data.unlocked.map((item) => {
        item.type = "unlocked";
        return item;
      });
    }
    const data = response.data.locked.concat(response.data.unlocked);
    setBenevits(data);
    setIsLoading(false);
  };

  const searchData = async (data) => {
    if (data !== "") {
      setIsLoading(true);
      const response = await searchBenevits(data);
      if (response.status === 200) {
        setBenevits(response.data);
      }
      setIsLoading(false);
    } else {
      setIsLoading(true);
      console.log("consulta global");
      fetchData();
    }
  };

  return {
    benevits,
    isLoading,
    searchData,
  };
}
