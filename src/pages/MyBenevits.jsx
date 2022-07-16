import { useEffect, useState } from "react";
import { Layout, Card, Skeleton } from "../components";
import { getBenevits } from "../apis";

export function MyBenevits() {
  const [benevits, setBenevits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const test = await getBenevits();
      let data = [];
      if (test.data.unlocked.length > 0) {
        data = test.data.unlocked.map((item) => {
          item.type = "unlocked";
          return item;
        });
      }
      setIsLoading(false);
      setBenevits(data);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="containerBack">
        {isLoading ? (
          <Skeleton />
        ) : (
          benevits.map((benevit) => {
            return <Card key={benevit.id} data={benevit} />;
          })
        )}
      </div>
    </Layout>
  );
}
