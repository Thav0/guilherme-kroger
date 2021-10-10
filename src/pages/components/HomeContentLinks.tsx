import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import Image from "next/image";
import styles from "./HomeContentLinks.module.scss";

interface Links {
  title: string;
  url: string;
}

interface HomeContentLinksProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  links: Links[];
  id: string;
}

export function HomeContentLinks({
  imgSrc,
  imgAlt,
  title,
  links,
  id,
}: HomeContentLinksProps) {
  return (
    <Flex
      direction={["column", "column", "row"]}
      className={styles.servicesContainer}
      id={id}
    >
      <Box>
        <Image src={imgSrc} alt={imgAlt} width="570" height="330" />
      </Box>
      <Box className={styles.serviceContent}>
        <Box as="header" className={styles.serviceContentHeader}>
          <h4 className={styles.title}>{title}</h4>

          <span className={styles.symbol}>
            <span></span>
          </span>
        </Box>

        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            <Text>{link.title}</Text>
          </Link>
        ))}
      </Box>
    </Flex>
  );
}
