import { useEffect, useState } from "react";
import { Layout, Card } from "../components";
import { getBenevits } from "../apis";

export function MyBenevits(props) {
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
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        benevits.map((benevit) => {
          return <Card key={benevit.id} data={benevit} />;
        })
      )}
    </Layout>
  );
}
