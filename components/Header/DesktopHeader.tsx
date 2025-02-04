import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { HeaderLink } from "@/utils/types";
import { brandColors } from "@/styles/theme";

type Props = {
  headerLinks: HeaderLink[];
};

const DesktopHeader = ({ headerLinks }: Props) => {
  return (
    <Flex
      marginY={1}
      marginX={4}
      justifyContent={"center"}
      alignItems={"center"}
      background={"rgba(255,255,255,0.5)"}
      borderRadius={"3xl"}
      paddingX={10}
      gap={12}
      paddingY={3}
      marginLeft={"auto"}
    >
      {headerLinks.map((headerLink: HeaderLink) => (
        <Link href={headerLink.link}>
          <Text color={brandColors.black}>{headerLink.label}</Text>
        </Link>
      ))}
    </Flex>
  );
};

export default DesktopHeader;
