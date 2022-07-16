import { Layout, Card, Skeleton } from "../components";
import { useBenevits } from "../hooks/useBenevits";

export function Benevits() {
  const { benevits, isLoading } = useBenevits();

  return (
    <Layout>
      {isLoading ? (
        <Skeleton />
      ) : (
        benevits.map((benevit) => {
          return <Card key={benevit.id} data={benevit} />;
        })
      )}
    </Layout>
  );
}
