import React, { useRef, useEffect } from "react";
import { Flex, UnorderedList } from "@chakra-ui/react";
import gsap from "gsap";

import ProjectCard from "./components/ProjectCard";
import { ProjectsList } from "./ProjectsInfo";

const Projects = ({ isOpen }: { isOpen: boolean }) => {
  const projectsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen && projectsRef.current) {
      gsap.fromTo(projectsRef.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5, stagger: 0.2, ease: "power2.out" });
    }
  }, [isOpen]);

  return (
    <UnorderedList ref={projectsRef} flexDirection={"column"} spacing={4}>
      {ProjectsList.map((project: any, index: number) => (
        <ProjectCard title={project.title} description={project.description} />
      ))}
    </UnorderedList>
  );
};

export default Projects;
