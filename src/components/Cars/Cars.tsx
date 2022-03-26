import React, { useEffect, useState } from "react";
import {
  Block,
  Card,
  CardContent,
  Col,
  Flex,
  Grid,
  Icon,
  Link,
  Row,
  Spacer,
  Text,
  View,
} from "vcc-ui";
import { useSpringCarousel } from "react-spring-carousel";
import carsList from "../../data/carsList";
import CarouselItem from "./CarouselItem";
import CarouselThumb from "./CarouselThumb";

export const Cars: React.FC = () => {
  // const [cars, setCars] = useState<any[]>([]);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const cars = await (await fetch("./api/cars.json")).json();
  //       setCars(cars);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    getCurrentActiveItem,
    thumbsFragment,
  } = useSpringCarousel({
    itemsPerSlide: 4,
    withLoop: true,
    withThumbs: true, 
    items: carsList.map((car: any) => ({
      id: car.id,
      renderItem: <CarouselItem car={car} />,
      renderThumb: (
        <CarouselThumb
          id={car.id}
          slideToItem={() => slideToItem(car.id)}
          getCurrentActiveItem={() => getCurrentActiveItem}
        />
      ),
    })),
  });

  return (
    <Block>
      {carsList.length ? <Block>{carouselFragment}</Block> : <h1>Loading</h1>}
      <Flex
        extend={{ flexDirection: "row", right: "25px", position: "absolute" }}
      >
        <button className="prev-next-button" onClick={slideToPrevItem}>
          <Icon type="media-previous-32"></Icon>
        </button>
        <button className="prev-next-button" onClick={slideToNextItem}>
          <Icon type="media-next-32"></Icon>
        </button>
        <div>{thumbsFragment}</div>
      </Flex>
    </Block>
  );
};
