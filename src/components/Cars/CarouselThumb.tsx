import { MouseEventHandler, useState } from "react";

interface CarouselThumbProps {
  getCurrentActiveItem: Function;
  slideToItem: Function;
  id: string;
}

const CarouselThumb: React.FC<CarouselThumbProps> = ({ getCurrentActiveItem, slideToItem, id }) => {
  const [isActive, setIsActive] = useState<boolean>(getCurrentActiveItem()().id === id);

  const onClick = () => {
    slideToItem();
    setIsActive(getCurrentActiveItem()().id === id)
  }
  return (
    <div className={`thumb-container ${isActive ? "thumb-active" : ""}`} onClick={onClick}>
      <div className="tumb-icon"></div>
    </div>
  );
};

export default CarouselThumb;
