import { useState } from "react";
import { Info } from "lucide-react";

function ArticleHero({ title }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[360px]">
      {imgFailed ? (
        <div className="absolute inset-0 bg-gray-700" />
      ) : (
        <img
          src="/article/hero.jpg"
          alt={title}
          onError={() => setImgFailed(true)}
          className="absolute inset-0 w-fit h-fit object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <button
        aria-label="More info"
        className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-700"
      >
        <Info className="w-4 h-4" />
      </button>

      <h1 className="absolute bottom-6 left-6 right-6 md:right-24 text-xl md:text-3xl font-extrabold text-white leading-snug">
        {title}
      </h1>
    </div>
  );
}

export default ArticleHero;
