import { Suspense } from "react";
import H1 from "@/components/ui/Headings/H1";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import SuspenceProducts from "@/components/suspence/Products";
import { getBase64Images } from "@/utils/getBase64";
import { unstable_noStore } from "next/cache";

async function getData() {
  unstable_noStore();
  const res = await fetch(`${process.env.BASEURL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Products = async () => {
  const { products }: { products: Product[] } = await getData();
  const blurImage = await getBase64Images(products);
  return (
    <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 ">
      {products.map((p, index) => (
        <ProductCard key={p.id} p={p} blurImage={blurImage} index={index} />
      ))}
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <H1 title="Product list" />
      <Products />
      {/* <Suspense fallback={<SuspenceProducts />}>
      </Suspense> */}
    </>
  );
};

export default HomePage;
