import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const FullScreenView = ({
  mainImage,
  isFullScreen,
  setIsFullScreen,
}: {
  isFullScreen: boolean;
  mainImage: string;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
}) => {
  if (isFullScreen)
    return (
      <section className="absolute top-0 left-0 z-50 w-full h-full bg-black">
        <button
          className="bg-black/50 hover:bg-black/80 text-white pr-4 pl-6 py-3 shadow absolute rounded-bl-xl top-0 right-0 z-[999] text-lg font-bold hover:text-orange-500"
          type="button"
          onClick={() => {
            setIsFullScreen((prev) => !prev);
          }}
        >
          X
        </button>
        <Image className="h-full object-contain" src={mainImage} alt="" fill />
      </section>
    );
};
export default FullScreenView;
