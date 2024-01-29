import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const MainImage = ({
  mainImage,
  setIsFullScreen,
  mainImgBlur,
}: {
  mainImage: string;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  mainImgBlur: string;
}) => {
  return (
    <button
      className="block relative"
      type="button"
      onClick={() => setIsFullScreen((prev) => !prev)}
    >
      <Image
        className="h-[400px] object-scale-down"
        width={400}
        height={400}
        blurDataURL={mainImgBlur}
        placeholder="blur"
        alt="main image"
        src={mainImage}
      />
    </button>
  );
};

export default MainImage;
