import { brandColors } from "@/styles/theme";
import { Image, Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
};

const AboutMe = ({ isOpen }: Props) => {
  return (
    <div
      id="AboutMe"
      className=" font-hind py-[100px] flex flex-col gap-20 lg:flex-row items-start justify-between lg:justify-evenly w-full lg:w-10/12 mx-auto"
    >
      <div className="flex-col max-w-[600px] w-10/12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-hind mb-6">Hi, I'm Nurbolat Aimakov 👋🏻</h2>

        <div className="flex flex-col md:flex-row items-start text-md lg:text-xl md:items-center gap-2 pt-4">
          <p className="flex gap-2">
            Web developer from
            <a href="https://www.flaticon.com/free-icons/kazakhstan" title="kazakstan icons">
              <img alt="kazakhstan-flag" className="w-[38px] h-8 object-cover mx-1 -translate-y-[10px]" src="/assets/icons/kazakhstan.png" />
            </a>
          </p>
          <p className="flex gap-2">
            , currently based in
            <a href="https://www.flaticon.com/free-icons/korea" title="korea icons">
              <Box backgroundColor={brandColors.white} className="mx-1 -translate-y-[10px] rounded-[4px] py-[1px] px-[3px]">
                <Image
                  _before={{
                    content: '""',
                    display: "block",
                    width: "32px",
                    height: "32px",
                    backgroundColor: brandColors.white,
                  }}
                  alt="korea-flag"
                  className="w-8 h-8 "
                  src="assets/icons/korea.png"
                />
              </Box>
            </a>
          </p>
        </div>

        <p className="pt-4">I have a Ph.D. in biomedical engineering from Ulsan National Institute of Science and Technology (UNIST, Ulsan, South Korea).</p>
        <p className="pt-4">
          Throughout my studies, even though I find biomedical engineering an extremely broad and exciting field, I finally decided to bind my life & career
          with coding in one of its forms. After trying myself in several directions, I chose Front-End development as my main focus.
        </p>
        <p className="pt-4">
          I enjoy building interactable web applications that solve/optimize day-to-day things. Apart from Front-End, I'm proficient in Backend tools for
          building complete products.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
