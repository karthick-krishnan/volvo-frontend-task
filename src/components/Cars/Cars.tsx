import React, { useEffect, useState } from "react";
import { Block, Card, CardContent, Col, Flex, Grid, Icon, Link, Row, Spacer, Text, View } from "vcc-ui";
import { useSpringCarousel } from 'react-spring-carousel';


export const Cars: React.FC = () => {
  // const [cars, setCars] = useState<any[]>([]);




  const cars : any = [
    {
      "id": "xc90-recharge",
      "modelName": "XC90 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc90_recharge.jpg"
    },
    {
      "id": "xc60-recharge",
      "modelName": "XC60 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc60_recharge.jpg"
    },
    {
      "id": "xc40-recharge",
      "modelName": "XC40 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc40_recharge.jpg"
    },
    {
      "id": "xc40-bev",
      "modelName": "XC40 Recharge", 
      "bodyType": "suv",
      "modelType": "pure electric",
      "imageUrl": "/images/xc40_bev.jpg"
    },
    {
      "id": "v90-recharge",
      "modelName": "V90 Recharge", 
      "bodyType": "estate",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/v90_recharge.jpg"
    },
    {
      "id": "v60-recharge",
      "modelName": "V60 Recharge", 
      "bodyType": "estate",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/v60_recharge.jpg"
    },
    {
      "id": "s90-recharge",
      "modelName": "S90 Recharge", 
      "bodyType": "sedan",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/s90_recharge.jpg"
    },
    {
      "id": "s60-recharge",
      "modelName": "S60 Recharge", 
      "bodyType": "sedan",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/s60_recharge.jpg"
    }
]

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
    slideToNextItem
  } = useSpringCarousel({
    itemsPerSlide: 4,
    withLoop: true,
    items: cars.map((car: any) => ({
      id: car.id,
      renderItem: (
      <Block>
        <View>
              <Text subStyle="inline-link">{car.bodyType}</Text>
              <Spacer />
              <Flex extend={{ flexDirection: "row" }}>
                <Text subStyle="emphasis">
                  {car.modelName}
                </Text>
                <Spacer />
                <Text subStyle="inline-link">
                  {car.modelType}
                </Text>
              </Flex>
              <Spacer />


            <Flex
              extend={{
                justifyContent: "center",
                padding: 32,
                backgroundImage: `url(${car.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "217px",
                height: "200px",
              }}
            ></Flex>
            <Flex extend={{ flexDirection: "row", justifyContent: 'center'}}>
              <Link href="https://www.volvocars.com/" arrow="right">
                Learn
              </Link>
              <Spacer />
              <Link href="https://www.volvocars.com/" arrow="right">
                shop
              </Link>
            </Flex>
          </View>
      </Block>

      ),
    })),
  });

  return (
      <Block>
      {cars.length ? <Block>{carouselFragment}</Block> : <h1>Loading</h1>}
        <Flex extend={{ flexDirection: "row", right: '25px', position: 'absolute' }}>
          <button className="prev-next-button" onClick={slideToPrevItem}><Icon type="media-previous-32" ></Icon></button>
          <button className="prev-next-button" onClick={slideToNextItem}><Icon type="media-next-32"></Icon></button>
        </Flex>
      </Block>
  );
};

