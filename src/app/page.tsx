import H1 from "@/components/ui/Headings/H1";
import { Product } from "../../types";
import ProductCard from "@/components/ProductCard";

async function getData() {
  const res = await fetch(`${process.env.BASEURL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomePage = async () => {
  const { products }: { products: Product[] } = await getData();

  return (
    <>
      <H1 title="Product list" />
      <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 ">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
