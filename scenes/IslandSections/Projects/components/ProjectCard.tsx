import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import gsap from "gsap";
import { brandColors } from "@/styles/theme";

type Props = {
  title: string;
  description: string;
  link?: string;
  coverImgUrl?: string;
  date?: string;
};

const ProjectCard = ({ title, description, link, coverImgUrl }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      backgroundColor={brandColors.white}
      textColor={brandColors.black}
      padding={8}
      height={"200px"}
      justifyContent={"flex-end"}
      paddingBottom={2}
      w={"60%"}
      mx={"auto"}
      borderRadius={12}
    >
      <Text fontWeight={"bold"} fontSize={"xl"}>
        {title}
      </Text>
      <Text>{description}</Text>
      {/* <Button width={"fit-content"}>
        <Text textColor={brandColors.black}>Read more</Text>
      </Button> */}
    </Flex>
  );
};

export default ProjectCard;
