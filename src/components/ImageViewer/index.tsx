"use client";

import React from "react";

import FullScreenView from "./FullScreen";
import ThumbnailImages from "./Thumbnails";
import MainImage from "./MainImage";

export default function ImageViewer({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = React.useState(images[0]);
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Escape" && isFullScreen) {
        setIsFullScreen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFullScreen]);

  return (
    <section>
      <MainImage mainImage={mainImage} setIsFullScreen={setIsFullScreen} />
      <ThumbnailImages
        isFullScreen={isFullScreen}
        images={images}
        setMainImage={setMainImage}
      />
      <FullScreenView
        setIsFullScreen={setIsFullScreen}
        isFullScreen={isFullScreen}
        mainImage={mainImage}
      />
    </section>
  );
}
