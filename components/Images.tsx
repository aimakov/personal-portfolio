import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { islandRadius, islandPositionRadius, islandsAngle } from "@/settings/constants";
import { SoulStone, SpaceStone, PowerStone, TimeStone, RealityStone, MindStone } from "./Whirlpool/images";
import { MindStoneTop, MindStoneBottom } from "./Whirlpool/images";

type Props = {
  setAccentColor: Dispatch<SetStateAction<string>>;
};

const Images = ({ setAccentColor }: Props) => {
  const [stoneCoordinates, setStoneCoordinates] = useState<{ [x: string]: { x: number; y: number } | null }>();

  useEffect(() => {
    const stoneRadius = islandRadius(window.innerWidth, window.innerHeight);
    const stonePositionRadius = islandPositionRadius(window.innerWidth, window.innerHeight, stoneRadius);

    setStoneCoordinates({
      MindStone: { x: stonePositionRadius * Math.cos(islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 1) },
      SoulStone: { x: stonePositionRadius * Math.cos(2 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 2) },
      PowerStone: { x: stonePositionRadius * Math.cos(3 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 3) },
      TimeStone: { x: stonePositionRadius * Math.cos(4 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 4) },
      RealityStone: { x: stonePositionRadius * Math.cos(5 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 5) },
      SpaceStone: { x: stonePositionRadius * Math.cos(6 * islandsAngle), y: stonePositionRadius * Math.sin(islandsAngle * 6) },
    });
  }, []);

  return (
    <Flex>
      <Flex
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.MindStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.MindStone?.y ?? 0}px))`,
        }}
        flexDirection={"column"}
        className="group "
        justifyContent={"center"}
        alignItems={"center"}
        onMouseEnter={() => setAccentColor("orange")}
        onMouseLeave={() => setAccentColor("#000000")}
      >
        {/* <Image src={MindStone} alt="MindStone" width={"auto"} height={28} transition={"transform .2s"} _hover={{ transform: "scale(1.5)" }} /> */}
        <Image
          className=" translate-y-[1px] group-hover:scale-[1.2] group-hover:drop-shadow-xl group-hover:mb-5 group-hover:ml-2 transition-all duration-300"
          src={MindStoneTop}
          alt="MindStone"
          width={"auto"}
          height={14}
          zIndex={1}
        />
        <Image
          className=" group-hover:scale-[1.2] group-hover:drop-shadow-xl group-hover:mt-5 group-hover:mr-2 transition-all duration-300"
          src={MindStoneBottom}
          alt="MindStone"
          width={"auto"}
          height={14}
          zIndex={1}
        />
        <Text className="absolute left-1/2 -translate-x-1/2">Hello</Text>
      </Flex>
      <Image
        src={TimeStone}
        alt="TimeStone"
        width={"auto"}
        height={28}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.TimeStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.TimeStone?.y ?? 0}px))`,
        }}
        onMouseEnter={() => setAccentColor("green")}
        onMouseLeave={() => setAccentColor("#000000")}
      />
      <Image
        src={SpaceStone}
        alt="SpaceStone"
        width={"auto"}
        height={28}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.SpaceStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.SpaceStone?.y ?? 0}px))`,
        }}
        onMouseEnter={() => setAccentColor("blue")}
        onMouseLeave={() => setAccentColor("#000000")}
      />
      <Image
        src={SoulStone}
        alt="SoulStone"
        width={"auto"}
        height={28}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.SoulStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.SoulStone?.y ?? 0}px))`,
        }}
        onMouseEnter={() => setAccentColor("yellow")}
        onMouseLeave={() => setAccentColor("#000000")}
      />
      <Image
        src={PowerStone}
        alt="PowerStone"
        width={"auto"}
        height={28}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.PowerStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.PowerStone?.y ?? 0}px))`,
        }}
        onMouseEnter={() => setAccentColor("purple")}
        onMouseLeave={() => setAccentColor("#000000")}
      />
      <Image
        src={RealityStone}
        alt="RealityStone"
        width={"auto"}
        height={28}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${stoneCoordinates?.RealityStone?.x ?? 0}px),calc(-50% + ${stoneCoordinates?.RealityStone?.y ?? 0}px))`,
        }}
        onMouseEnter={() => setAccentColor("red")}
        onMouseLeave={() => setAccentColor("#000000")}
      />
    </Flex>
  );
};

export default Images;
