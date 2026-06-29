import { useState } from "react";

const mainImage = "/product-detail/main.png";
const thumbs = [
  "/product-detail/thumb-1.png",
  "/product-detail/thumb-2.png",
  "/product-detail/thumb-3.png",
  "/product-detail/thumb-4.png",
];

function GalleryImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${className} bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-[10px] text-gray-400 text-center px-1`}
      >
        Add {src}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${className} object-contain`}
    />
  );
}

function ProductGallery() {
  const [active, setActive] = useState(null);
  const displayedImage = active === null ? mainImage : thumbs[active];

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {thumbs.map((thumb, i) => (
          <button
            key={thumb}
            onClick={() => setActive(i)}
            className={`w-16 h-16 rounded-lg border-2 overflow-hidden ${
              active === i ? "border-teal-400" : "border-gray-200"
            }`}
          >
            <GalleryImage src={thumb} alt={`Thumbnail ${i + 1}`} className="w-full h-full" />
          </button>
        ))}
      </div>

      <div className="relative flex-1">
        <span className="absolute top-2 left-2 z-10 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
          Deal of the Day
        </span>
        <span className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-400 cursor-pointer text-lg">
          ♡
        </span>
        <GalleryImage
          src={displayedImage}
          alt="Product"
          className="w-full h-[360px] rounded-xl border border-gray-200"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
