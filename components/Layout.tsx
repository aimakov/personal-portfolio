import React, { ReactNode, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { brandColors } from "@/styles/theme";
import SectionIslands from "./SectionIslands";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [accentColor, setAccentColor] = useState(brandColors.lighterBlack);

  return (
    <Flex
      flexDirection={"column"}
      height={"100dvh"}
      paddingX={10}
      paddingY={4}
      style={{ transition: "all 300ms ease-in-out", boxShadow: `inset 0 0 20px 10px ${accentColor}` }}
      bgColor={brandColors.lighterBlack}
    >
      <Flex
        position={"fixed"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgGradient={`radial-gradient(circle at center,  ${brandColors.black} ,transparent )`}
        ring={"2px solid"}
        ringColor={"red"}
      ></Flex>
      {children}
      <SectionIslands setAccentColor={setAccentColor} />
    </Flex>
  );
};

export default Layout;
