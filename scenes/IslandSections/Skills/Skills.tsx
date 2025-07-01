import React, { useRef, useEffect } from "react";
import { Flex, Text, UnorderedList } from "@chakra-ui/react";
import gsap from "gsap";

import { skills } from "./components/SkillsInfo";
import SkillBadge from "./components/SkillBadge";

type Props = {
  isOpen: boolean;
};

const Skills = ({ isOpen }: Props) => {
  const titleWidth = "140px";

  const skillsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen && skillsRef.current) {
      gsap.fromTo(skillsRef.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5, stagger: 0.2, ease: "power2.out" });
    }
  }, [isOpen]);

  return (
    <UnorderedList ref={skillsRef} flexDirection={"column"} spacing={8} alignItems={"flex-start"}>
      <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} w={"100%"}>
        My skills
      </Text>

      <Flex id={"frontend"} alignItems={"center"} gap={2}>
        <Text w={titleWidth} fontSize={"lg"}>
          Frontend:
        </Text>
        {Object.entries(skills.frontend).map((skill) => (
          <SkillBadge name={skill[1].name} image={skill[1].image} />
        ))}
      </Flex>

      <Flex id={"backend"} alignItems={"center"} gap={2}>
        <Text w={titleWidth} fontSize={"lg"}>
          Backend:
        </Text>
        {Object.entries(skills.backend).map((skill) => (
          <SkillBadge name={skill[1].name} image={skill[1].image} />
        ))}
      </Flex>

      <Flex id={"graphicDesign"} alignItems={"center"} gap={2}>
        <Text w={titleWidth} fontSize={"lg"}>
          Graphic Design:
        </Text>
        {Object.entries(skills.graphicDesign).map((skill) => (
          <SkillBadge name={skill[1].name} image={skill[1].image} />
        ))}
      </Flex>

      <Flex id={"engineering"} alignItems={"center"} gap={2}>
        <Text w={titleWidth} fontSize={"lg"}>
          Engineering:
        </Text>
        {Object.entries(skills.engineering).map((skill) => (
          <SkillBadge name={skill[1].name} image={skill[1].image} />
        ))}
      </Flex>
    </UnorderedList>
  );
};

export default Skills;
