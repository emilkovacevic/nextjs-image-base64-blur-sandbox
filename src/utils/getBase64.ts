import { Product } from "@/types";
import { getPlaiceholder } from "plaiceholder";

export const getBase64Image = async (image: string): Promise<string> => {
  try {
    const res = await fetch(image);
    if (!res.ok) {
      throw new Error("Blur image url not provided");
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
    return "";
  }
};

export const getBase64Images = async (
  products: Product[],
): Promise<string[]> => {
  const base64Promises = products.map((p) => getBase64Image(p.images[0]));
  const base64Results = await Promise.all(base64Promises);

  return base64Results;
};
