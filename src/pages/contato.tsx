import { Input } from "@chakra-ui/input";
import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const Contato: NextPage = () => {
  return (
    <Box className="">
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.2170901409686!2d-49.96527393507229!3d-22.231840569723687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd76c1112a499%3A0xd189ab0f2074ac09!2sR.%20Olindo%20Veronez%2C%2089%20-%20Jardim%20Acapulco%2C%20Mar%C3%ADlia%20-%20SP%2C%2017525-310%2C%20Brazil!5e0!3m2!1sen!2spt!4v1633874000230!5m2!1sen!2spt"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>

      <VStack
        display="flex"
        flexDirection="row"
        spacing={4}
        className="container"
      >
        <Box className="contactForm" width="65%">
          <VStack>
            <Box width="100%">
              <HStack>
                <Box>
                  <FormControl id="name">
                    <Input type="text" placeholder="Seu nome *" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="email">
                    <Input type="email" placeholder="Seu e-mail *" />
                  </FormControl>
                </Box>
              </HStack>
            </Box>
            <Box width="100%">
              <FormControl id="phone">
                <Input type="text" placeholder="Telefone *" />
              </FormControl>
            </Box>
            <Box width="100%">
              <FormControl id="subject">
                <Input type="text" placeholder="Assunto *" />
              </FormControl>
            </Box>
            <Box width="100%">
              <Textarea placeholder="Escreva sua mensagem *"></Textarea>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h4">FALE CONNOSCO</Heading>
          <p>
            <b>Tel:</b> +55 94033-8382/ +55 11 2970-1070
          </p>
          <p>
            <b>Email:</b> contato@alphasolucoes.com
          </p>
          <p>
            <b>Atendimento:</b> Segunda a sexta-feira,
          </p>
          <p>das 8h00 às 19h00.</p>
          <p>
            <b>Endereço:</b> Av. Copacabana, 112 | Cj. 1707 a 1709 | 06472-001 |
            Alphaville, Barueri, SP
          </p>
        </Box>
      </VStack>
    </Box>
  );
};
export default Contato;
