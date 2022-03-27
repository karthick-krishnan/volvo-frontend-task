import React, { useEffect, useState } from "react";
import { Block, Flex, Icon, Spinner } from "vcc-ui";
import { useSpringCarousel } from "react-spring-carousel";
import carsList from "../../data/carsList";
import CarouselItem from "./CarouselItem";
import CarouselThumb from "./CarouselThumb";

export const Cars: React.FC = () => {
  const [cars, setCars] = useState<any[]>([{ id: null }]);
  const [activeSlideId, setActiveSlideId] = useState<string>(carsList[0].id);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const cars = await (await fetch("./api/cars.json")).json();
        setCars(cars);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    getCurrentActiveItem,
    thumbsFragment,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: cars.length >= 4 ? 4 : 1,
    shouldResizeOnWindowResize: true,
    withLoop: true,
    withThumbs: true,
    items: cars.map((car: any) => ({
      id: car.id,
      renderItem: isLoading ? (
        <Spinner size={48} />
      ) : (
        <CarouselItem car={car} />
      ),
      renderThumb: (
        <CarouselThumb
          id={car.id}
          slideToItem={() => slideToItem(car.id)}
          activeSlideId={activeSlideId}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideChange") {
      setActiveSlideId(getCurrentActiveItem().id);
    }
  });

  const renderCars = () => {
    return (
      <>
        <Block>
          <>
            {carouselFragment}
            <div className="carousel-buttons">
              <button className="prev-next-button" onClick={slideToPrevItem}>
                <Icon type="media-previous-32"></Icon>
              </button>
              <button className="prev-next-button" onClick={slideToNextItem}>
                <Icon type="media-next-32"></Icon>
              </button>
            </div>
          </>
        </Block>
        <Flex className="thumbs-icon-container">{thumbsFragment}</Flex>
      </>
    );
  };

  return <Block>{renderCars()}</Block>;
};
