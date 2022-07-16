import { Layout, Card, Skeleton, Input } from "../components";
import { useBenevits } from "../hooks/useBenevits";

export function Benevits() {
  const { benevits, isLoading, searchData } = useBenevits();

  const handleChange = (e) =>searchData(e.target.value);

  return (
    <Layout>
      <>
        <div className="containerBack">
          <Input
            type="text"
            placeholder="Buscar Producto"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="containerBack">
          {isLoading ? (
            <Skeleton />
          ) : (
            benevits.map((benevit) => {
              return <Card key={benevit.id} data={benevit} />;
            })
          )}
        </div>
      </>
    </Layout>
  );
}
