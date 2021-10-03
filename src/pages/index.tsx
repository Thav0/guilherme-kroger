import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Carousel } from "./components/Carousel";
import { HomeContentLinks } from "./components/HomeContentLinks";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      {/* <Carousel /> */}

      <Heading as="h3" color="red.800">
        Serviços
      </Heading>

      <HomeContentLinks
        imgAlt="teste"
        imgSrc="/images/ser_regularizacao_obras_001.jpg"
        title="Regularização"
        links={[
          {
            title: "teste",
            url: "http://alphasolucoes.com/servicos/habite-se/",
          },
        ]}
      />
    </Box>
  );
};

export default Home;
