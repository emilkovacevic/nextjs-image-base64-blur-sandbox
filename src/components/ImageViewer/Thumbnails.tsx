import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const ThumbnailImages = ({
  images,
  setMainImage,
  isFullScreen,
}: {
  images: string[];
  setMainImage: Dispatch<SetStateAction<string>>;
  isFullScreen: boolean;
}) => {
  // keyboard arrow listener
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClickOnThumbnailImage = (image: string, index: number) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  const navigateToNextImage = React.useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setMainImage(images[nextIndex]);
  }, [currentIndex, images, setMainImage]);

  const navigateToPreviousImage = React.useCallback(() => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(previousIndex);
    setMainImage(images[previousIndex]);
  }, [currentIndex, images, setMainImage]);

  React.useEffect(() => {
    const { body } = document;
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        navigateToPreviousImage();
      } else if (event.key === "ArrowRight") {
        navigateToNextImage();
      }
    };

    if (isFullScreen) {
      body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      document.addEventListener("keydown", handleKeyPress);
    } else {
      body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    currentIndex,
    images,
    isFullScreen,
    navigateToNextImage,
    navigateToPreviousImage,
    setMainImage,
  ]);

  if (images.length <= 1) return null;
  return (
    <>
      <section
        className={`
        ${
          isFullScreen
            ? "absolute z-[999] -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 p-2 w-full overflow-x-auto flex gap-4 my-4 "
            : "flex-wrap"
        }
   
      flex gap-4 my-4`}
      >
        {images.map((image, index) => (
          <button
            className={`${
              currentIndex === index && "border-2 border-orange-500"
            } shadow-md`}
            type="button"
            onClick={() => handleClickOnThumbnailImage(image, index)}
            key={image}
          >
            <Image
              className="w-24 h-24 object-scale-down"
              width={96}
              height={96}
              alt="thumbnail image"
              src={image}
            />
          </button>
        ))}
      </section>
      {isFullScreen ? (
        <div className="absolute z-[9999] top-1/2 left-0 flex justify-between w-full">
          <button
            className="pl-1 pr-2 py-2 hover:bg-black/80 bg-black/50 text-white hover:text-orange-500"
            type="button"
            onClick={() => {
              navigateToPreviousImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>{" "}
            <span className="sr-only">previous image</span>
          </button>
          <button
            className="pl-2 pr-1 py-2 hover:bg-black/80 bg-black/50 text-white hover:text-orange-500"
            type="button"
            onClick={() => {
              navigateToNextImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>{" "}
            <span className="sr-only">next image</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ThumbnailImages;
