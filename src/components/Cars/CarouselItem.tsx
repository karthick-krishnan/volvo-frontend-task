import { Block, Flex, Link, Spacer, Text, View } from "vcc-ui";

interface CarouselItemProps {
  car: any
}

const CarouselItem: React.FC<CarouselItemProps> = ({car}) => {
  return (
    <Block>
      <View>
        <Text subStyle="inline-link">{car.bodyType}</Text>
        <Spacer />
        <Flex extend={{ flexDirection: "row" }}>
          <Text subStyle="emphasis">{car.modelName}</Text>
          <Spacer />
          <Text subStyle="inline-link">{car.modelType}</Text>
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
        <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
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
  );
};

export default CarouselItem;
