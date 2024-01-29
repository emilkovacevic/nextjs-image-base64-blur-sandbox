import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import Rating from "./ui/Rating";

const ProductCard = async ({
  p,
  blurImage,
  index,
}: {
  p: Product;
  blurImage: string[];
  index: number;
}) => {
  return (
    <article className="relative bg-white max-w-xs rounded overflow-hidden shadow-lg hover:shadow-md flex flex-col justify-between">
      <Link className="absolute inset-0 z-10" href={`${p.id}`}>
        <span className="sr-only">View Product</span>
      </Link>
      <div className="h-40 relative overflow-hidden">
        <Image
          className="h-full w-full"
          src={p.images[0]}
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL={blurImage[index]}
          alt={`${p.title} product image`}
          sizes="(max-width: 400px), 100vw, 400px"
        />
      </div>
      <div className="px-1 py-2 flex flex-col">
        <h2 className="font-bold text-xl mb-2">{p.title}</h2>
        <div>
          <span className="text-gray-500">Catgory: {p.category}</span>
          <span className="ml-2 text-gray-500">
            <Rating rating={p.rating} />
          </span>
        </div>
      </div>
      <h3 className="text-center text-gray-700 font-semibold text-2xl py-2">
        ${p.price}
      </h3>
    </article>
  );
};

export default ProductCard;
