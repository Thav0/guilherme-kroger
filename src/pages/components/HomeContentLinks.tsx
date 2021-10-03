import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import Image from "next/image";

interface Links {
  title: string;
  url: string;
}

interface HomeContentLinksProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  links: Links[];
}

export function HomeContentLinks({
  imgSrc,
  imgAlt,
  title,
  links,
}: HomeContentLinksProps) {
  return (
    <Flex direction="row">
      <Box>
        <Image src={imgSrc} alt={imgAlt} width="570" height="330" />
      </Box>
      <Box>
        <h4>{title}</h4>

        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            <Text>{link.title}</Text>
          </Link>
        ))}
      </Box>
    </Flex>
  );
}
