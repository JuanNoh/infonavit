import { useState, useEffect } from "react";
import { getBenevits } from "../apis";

export function useBenevits() {
  const [benevits, setBenevits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const test = await getBenevits();
      setIsLoading(false);
      if (test.data.locked.length > 0) {
        test.data.locked.map((item) => {
          item.type = "locked";
          return item;
        });
      }
      if (test.data.unlocked.length > 0) {
        test.data.unlocked.map((item) => {
          item.type = "unlocked";
          return item;
        });
      }
      const data = test.data.locked.concat(test.data.unlocked);
      console.log("datos", data);
      setBenevits(data);
    };
    fetchData();
  }, []);

  return {
    benevits,
    isLoading,
  };
}
