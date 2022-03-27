import { MouseEventHandler } from "react";

interface CarouselThumbProps {
  activeSlideId: string;
  slideToItem: MouseEventHandler;
  id: string;
}

const CarouselThumb: React.FC<CarouselThumbProps> = ({
  activeSlideId,
  slideToItem,
  id,
}) => {
  return (
    <div
      className={`thumb-container ${
        activeSlideId === id ? "thumb-active" : ""
      }`}
      onClick={slideToItem}
    >
      <div className="tumb-icon"></div>
    </div>
  );
};

export default CarouselThumb;
