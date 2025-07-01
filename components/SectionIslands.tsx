import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import gsap from "gsap";
import { Flex } from "@chakra-ui/react";

import { islandRadius, islandPositionRadius, islandsAngle, SectionIslandInfo, stoneColorsArray } from "@/settings/constants";
import SectionIsland from "./SectionIsland";

type Props = {
  setAccentColor: Dispatch<SetStateAction<string>>;
};

const SectionIslands = ({ setAccentColor }: Props) => {
  const [islandCoordinates, setIslandCoordinates] = useState<{ x: number; y: number }[]>([]);

  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const stoneRadius = islandRadius(window.innerWidth, window.innerHeight);
    const stonePositionRadius = islandPositionRadius(window.innerWidth, window.innerHeight, stoneRadius);

    setIslandCoordinates([
      { x: stonePositionRadius * Math.cos(1 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 1) },
      { x: stonePositionRadius * Math.cos(2 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 2) },
      { x: stonePositionRadius * Math.cos(3 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 3) },
      { x: stonePositionRadius * Math.cos(4 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 4) },
      { x: stonePositionRadius * Math.cos(5 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 5) },
      { x: stonePositionRadius * Math.cos(6 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 6) },
    ]);
  }, []);

  const handleCircleClick = (index: number) => {
    const circleElement = circlesRef.current[index];
    if (!circleElement) return;

    if (expandedIndex === index) {
      const tl = timelinesRef.current[index];
      tl.reverse();
      setExpandedIndex(null);
    } else {
      const tl = gsap.timeline();
      const newPosition = [1, 2, 3].includes(index) ? { left: 0 } : { right: 0 };

      tl.to(circlesRef.current[index], {
        borderRadius: "0em",
        top: "-5dvh",
        height: "110dvh",
        zIndex: 2,
        padding: "10dvh 0",
        justifyContent: "flex-start",
        ...newPosition,
        transform: "unset",
        width: "60vw",
        left: [1, 2, 3].includes(index) ? "0" : "unset",
      });

      timelinesRef.current[index] = tl;

      setExpandedIndex(index);
    }
  };

  return islandCoordinates.map((coordinate: { x: number; y: number }, index: number) => (
    <SectionIsland
      circlesRef={circlesRef}
      title={SectionIslandInfo[index].title}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(calc(-50% + ${coordinate.x ?? 0}px),calc(-50% + ${coordinate.y ?? 0}px))`,
      }}
      colors={stoneColorsArray[index]}
      setAccentColor={setAccentColor}
      handleCircleClick={() => handleCircleClick(index)}
      index={index}
      isOpen={expandedIndex === index}
    />
  ));
};

export default SectionIslands;
