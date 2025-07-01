import React from "react";
import Navbar from "../components/Navbar";
import Masonry from "react-masonry-css";

export default function Gallery() {
  const images = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    // Add more as needed
  ];

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  };

  return (
    <>
      <Navbar />
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="space-y-4"
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
              className="w-full rounded-lg shadow brightness-95 hover:brightness-100 transition"
            />
          ))}
        </Masonry>
      </section>
    </>
  );
}
