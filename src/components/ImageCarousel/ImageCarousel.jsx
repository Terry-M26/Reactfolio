import { useState, useRef, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ImageCarousel = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [currentIndex]);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="w-full h-64 bg-[var(--bg-card)] rounded-xl flex items-center justify-center border border-[var(--border-color)]">
        <p className="text-[var(--text-secondary)]">No screenshots available</p>
      </div>
    );
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setSlideKey((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            key={slideKey}
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].caption || `Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain carousel-slide-in"
          />
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[var(--accent)] text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous screenshot"
            >
              <IoChevronBack className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[var(--accent)] text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Next screenshot"
            >
              <IoChevronForward className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium">
              {currentIndex + 1} / {screenshots.length}
            </div>
          </>
        )}
      </div>

      {screenshots[currentIndex].caption && (
        <p className="text-center mt-3 text-[var(--text-secondary)] font-medium">
          {screenshots[currentIndex].caption}
        </p>
      )}

      {screenshots.length > 1 && (
        <div
          ref={thumbnailRef}
          className="flex gap-2 mt-4 overflow-x-auto pb-2 custom-scrollbar"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[var(--accent)] shadow-md scale-105"
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-[var(--border-color)]"
              }`}
              aria-label={screenshot.caption || `Go to screenshot ${index + 1}`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.caption || `Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
