import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import { brandColors } from "@/styles/theme";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDirection={"column"} height={"100dvh"} paddingX={10} paddingY={4} bgGradient="radial-gradient(circle at center, #9B6343, #4C2310)">
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
