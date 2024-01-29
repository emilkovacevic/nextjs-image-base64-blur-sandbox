import Image from "next/image";
import { Product } from "@/types";
import Rating from "@/components/ui/Rating";
import { getBase64Image } from "@/utils/getBase64";
import ImageViewer from "@/components/ImageViewer";

async function getData(id: string) {
  const res = await fetch(`${process.env.BASEURL}/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ProductPage = async ({
  params: { product },
}: {
  params: { product: string };
}) => {
  const p = (await getData(product)) as Product;
  const mainImgBlur = await getBase64Image(p.images[0]);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <ImageViewer images={p.images} mainImgBlur={mainImgBlur} />
            <div className="flex -mx-2 mb-4 mt-8">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <p>{p.brand}</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{p.title}</h2>
            <div className="my-4">
              <Rating rating={p.rating} />
            </div>
            <div className="mb-4 text-xl">
              <div className="mb-4">
                <span className="text-gray-700">Price: </span>
                <span className="font-bold text-gray-600">${p.price}</span>
                <span className="font-bold text-green-600">
                  {" "}
                  -{p.discountPercentage}% off
                </span>
              </div>
              <div>
                <span className=" text-gray-700">In stock: </span>
                <span className="font-bold text-gray-600">{p.stock}</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
