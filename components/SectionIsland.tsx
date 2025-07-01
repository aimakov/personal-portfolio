import React, { useMemo, Dispatch, SetStateAction } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { brandColors } from "@/styles/theme";

import { Projects, Skills, Education, AboutMe, Contact, Resume } from "@/scenes/IslandSections";

type Props = {
  title: string;
  link?: string;
  style: { [x: string]: any };
  colors: number[][];
  setAccentColor: Dispatch<SetStateAction<string>>;
  handleCircleClick: () => void;
  circlesRef: any;
  index: number;
  isOpen: boolean;
};

const SectionIsland = ({ title, link, style, colors, setAccentColor, handleCircleClick, circlesRef, index, isOpen }: Props) => {
  const scene = useMemo(() => {
    switch (title) {
      case "Projects":
        return <Projects isOpen={isOpen} />;
      case "Skills":
        return <Skills isOpen={isOpen} />;
      case "Education":
        return <Education isOpen={isOpen} />;
      case "About me":
        return <AboutMe isOpen={isOpen} />;
      case "Contact":
        return <Contact isOpen={isOpen} />;
      case "Resume":
        return <Resume isOpen={isOpen} />;
      default:
        return null;
    }
  }, [isOpen, title]);

  return (
    <Flex
      ref={(el: HTMLDivElement | null) => {
        if (circlesRef.current) {
          circlesRef.current[index] = el;
        }
      }}
      width={"110px"}
      height={"110px"}
      style={style}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      rounded={"full"}
      background={`radial-gradient(circle at center, rgb(${colors[0][0]},${colors[0][1]},${colors[0][2]}), rgb(${colors[1][0]},${colors[1][1]},${colors[1][2]}))`}
      dropShadow={"black"}
      onMouseEnter={() => {
        setAccentColor(`rgb(${colors[0][0]},${colors[0][1]},${colors[0][2]})`);
      }}
      onMouseLeave={() => {
        setAccentColor(brandColors.lighterBlack);
      }}
      _hover={{ cursor: isOpen ? "unset" : "pointer" }}
      onClick={() => {
        handleCircleClick();
      }}
    >
      {!isOpen && (
        <Text fontWeight={"semibold"} fontSize={"md"}>
          {title}
        </Text>
      )}

      {isOpen && scene}
    </Flex>
  );
};

export default SectionIsland;
