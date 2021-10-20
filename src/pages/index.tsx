import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Carousel } from "./components/Carousel";
import { HomeContentLinks } from "./components/HomeContentLinks";

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Box className="container">
        <Heading
          as="h3"
          color="red.800"
          marginLeft={[5, 0]}
          marginBottom={[10, 20]}
        >
          Serviços
        </Heading>

        <HomeContentLinks
          imgAlt="teste"
          imgSrc="/images/ser_regularizacao_obras_001.jpg"
          title="Regularização"
          id="regularizacao"
          links={[
            {
              title: "• Habite-se",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Averbação da construção",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Decadência de impostos",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Levantamento de acervo técnico",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },
          ]}
        />

        <HomeContentLinks
          imgAlt="teste"
          imgSrc="/images/ser_financiamento_bancario_001.jpg"
          title="Financiamento Bancário"
          id="financiamento-bancario"
          links={[
            {
              title: "• Habite-se",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Averbação da construção",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Decadência de impostos",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },

            {
              title: "• Levantamento de acervo técnico",
              url: "http://alphasolucoes.com/servicos/habite-se/",
            },
          ]}
        />
      </Box>
    </>
  );
};

export default Home;
