import { Button } from "@chakra-ui/button";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";

import styles from "./Footer.module.scss";

import { Icon } from "@chakra-ui/icons";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import React from "react";
import { Stack } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" className={styles.footer}>
      <Stack
        className={styles.container}
        direction={["column", "column", "row"]}
        spacing={[5, 20, 0]}
      >
        <Box>
          <Heading as="h4">Guilherme Kroger</Heading>
        </Box>
        <Box className={styles.info}>
          <Text align="center">
            TELEFONE
            <br />
            11 2970-1070 | 11 94033-8382
            <br />
            ATENDIMENTO
            <br />
            Segunda a sexta-feira, das 08:00 às 19:00
          </Text>
        </Box>
        <Box>
          <Button>FAQ</Button>
          <Button>CONTATO</Button>
        </Box>
        <Box className={styles.socialMedia}>
          <Text as="span">REDES SOCIAIS</Text>
          <Box>
            <Link>
              <Icon as={FaFacebookF} />
            </Link>
            <Link>
              <Icon as={FiInstagram} />
            </Link>
            <Link>
              <Icon as={FaLinkedinIn} />
            </Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
