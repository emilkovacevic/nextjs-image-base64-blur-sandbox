import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";

const ProductCard = ({ p }: { p: Product }) => {
  return (
    <article className="relative bg-white max-w-xs rounded overflow-hidden shadow-lg hover:shadow-md">
      <Link className="absolute inset-0 z-10" href={`${p.id}`}>
        <span className="sr-only">View Product</span>
      </Link>
      <div className="h-40 relative overflow-hidden">
        <Image
          fill
          src={p.images[0]}
          alt={`${p.title} product image`}
          sizes="(max-width: 400px), 100vw, 400px"
        />
      </div>
      <div className="px-1 py-2">
        <h2 className="font-bold text-xl mb-2">{p.title}</h2>
        <div className="flex items-center mb-4">
          <span className="text-gray-500">{p.category}</span>
        </div>
        <div>
          <span className="text-gray-700">${p.price}</span>
          <span className="ml-2 text-gray-500">{p.rating}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
