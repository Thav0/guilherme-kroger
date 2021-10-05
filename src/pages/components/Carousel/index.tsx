import Image from "next/image";
import Slider from "react-slick";
import { Text, Box } from "@chakra-ui/layout";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.scss";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export function Carousel() {
  return (
    <Box marginBottom={[10, 20, 30]} height={[180, 500, 626]}>
      <Swiper pagination={true} className={styles.swiper}>
        <SwiperSlide>
          <Text
            color="red.800"
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
          >
            PROTEGER O PATRIMÔNIO
            <br />
            DOS SEUS HERDEIROS
            <br />É INEGOCIÁVEL.
          </Text>
          <Image src="/images/carousel/new_banner01.jpg" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Text color="red.800">
            PATRIMÔNIO
            <br />
            CONSTRUÍDO:
            <br />
            É O MOMENTO
            <br />
            DE DELEGAR.
          </Text>
          <Image src="/images/carousel/new_banner02.jpg" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Text color="white">
            PROTEGER O PATRIMÔNIO
            <br />
            DOS SEUS HERDEIROS
            <br />É INEGOCIÁVEL.
          </Text>
          <Image src="/images/carousel/new_banner03.jpg" layout="fill" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
