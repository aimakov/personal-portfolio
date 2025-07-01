import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import { brandColors } from "@/styles/theme";

type Props = {
  title: string;
  icon: string | IconType;
  link: string;
};

const SocialLink = ({ title, icon, link }: Props) => {
  return (
    <Flex alignItems="center" gap={2}>
      <Link href={link}>
        {typeof icon === "string" ? (
          <Image src={icon} color={brandColors.white} filter="brightness(0) invert(1)" width={5} height={5} />
        ) : (
          <Icon fill={brandColors.white} as={icon} width={5} height={5} />
        )}
      </Link>
      <Text>{title}</Text>
    </Flex>
  );
};

export default SocialLink;
