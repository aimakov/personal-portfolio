import React from "react";
import { Flex, Image, Text, Tooltip } from "@chakra-ui/react";

type Props = {
  image: string;
  name: string;
};

const SkillBadge = ({ name, image }: Props) => {
  return (
    <Tooltip label={name} placement="top">
      <Image src={image} alt={name} w={10} h={10} rounded={"md"} />
    </Tooltip>
  );
};

export default SkillBadge;
