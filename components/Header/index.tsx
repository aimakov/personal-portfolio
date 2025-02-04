import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import DesktopHeader from "./DesktopHeader";
import { borderRadii } from "@/styles/theme";

type Props = {};

const headerLinks = [
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = (props: Props) => {
  return (
    <Flex width={"full"} flexDirection={"column"} height={16}>
      <Flex height={"100%"}>
        <Flex height={"100%"} width={"fit-content"} alignItems={"center"} px={6}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            {"≺"} aimakov.dev {"/≻"}
          </Text>
        </Flex>
        <DesktopHeader headerLinks={headerLinks} />
      </Flex>
    </Flex>
  );
};

export default Header;
