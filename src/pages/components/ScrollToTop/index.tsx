import { Flex, Text } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/icons";
import { FaArrowUp } from "react-icons/fa";

import style from "./style.module.scss";

import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    console.log(winScroll > heightToHideFrom);

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible ? (
        <LinkScroll to="header" smooth={true} className={style.scrollToTop}>
          <Text as="i">
            <Icon as={FaArrowUp} />
          </Text>
        </LinkScroll>
      ) : (
        ""
      )}
    </>
  );
}
