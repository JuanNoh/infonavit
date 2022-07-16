import { Layout, Card } from "../components";
import { useBenevits } from "../hooks/useBenevits";

export function Benevits() {
  const { benevits, isLoading } = useBenevits();

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
