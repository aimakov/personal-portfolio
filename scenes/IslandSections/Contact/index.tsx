import React, { useRef, useState } from "react";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import emailjs from "emailjs-com";
import { useForm, Resolver } from "react-hook-form";
import { Image, Flex, Text, Input, Textarea, Button, SimpleGrid } from "@chakra-ui/react";

import SocialLink from "./components/SocialLink";
import { images } from "@/settings/images";
import { brandColors } from "@/styles/theme";
import { percentToHex } from "@/utils/helpers";

type Props = {
  isOpen: boolean;
};

type FormValues = {
  fromName: string;
  fromEmail: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.fromName ? values : {},
    errors: !values.fromName
      ? {
          fromName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const ContactMe = ({ isOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log("Submitting");
    console.log(data);
  });

  function sendEmail() {
    // if (fromName && fromEmail && message) {
    //   emailjs.send(
    //     "service_bd7fonb",
    //     "template_qog32qh",
    //     // e.target,
    //     { from_name: fromName, from_email: fromEmail, message: message },
    //     "Cl5l7TTJ5tAF6kKWA"
    //   );
    // }
  }

  return (
    <Flex
      id="ContactMe"
      onClick={(e) => {
        e.stopPropagation();
      }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={20}
      w={"full"}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} mb={10}>
        My Contacts
      </Text>

      <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10} w={"full"}>
        <Flex flexDirection={{ base: "column", xl: "row" }} alignItems={"center"} justifyContent={"center"} gap={6} w={"full"}>
          <Flex flexDirection={"column"} gap={2} minW={"240px"} justifyItems={"flex-start"}>
            <SocialLink title="github.com/aimakov" icon={images.icons.github} link="https://github.com/aimakov" />
            <SocialLink title="linkedin.com/in/aimakov" icon={images.icons.linkedin} link="https://www.linkedin.com/in/aimakov" />
            <SocialLink title="instagram.com/aimakov.dev" icon={images.icons.instagram} link="https://instagram.com/aimakov.dev" />
          </Flex>

          <Flex flexDirection={"column"} justifyContent={"flex-start"} gap={2} minW={"240px"}>
            <SocialLink title="nurbolat.aimakov@gmail.com" icon={MdEmail} link="mailto:nurbolat.aimakov@gmail.com" />
            <SocialLink title="Ulsan, South Korea" icon={MdPlace} link="mailto:nurbolat.aimakov@gmail.com" />
            <SocialLink title="+82 10 4277 1907" icon={MdPhone} link="mailto:nurbolat.aimakov@gmail.com" />
          </Flex>
        </Flex>

        <form onSubmit={onSubmit} className="items-center justify-center gap-x-1 gap-y-1 w-full max-w-[600px]">
          <SimpleGrid columns={2} gap={2}>
            <Input
              {...register("fromName")}
              type="text"
              bgColor={brandColors.white + percentToHex(30)}
              padding={3}
              placeholder="Your name"
              _placeholder={{ color: brandColors.lighterBlack + percentToHex(50) }}
            />
            {errors?.fromName && <Text>{errors.fromName.message}</Text>}

            <Input
              {...register("fromEmail")}
              type="email"
              bgColor={brandColors.white + percentToHex(30)}
              padding={3}
              placeholder="Your email"
              _placeholder={{ color: brandColors.lighterBlack + percentToHex(50) }}
            />
            {errors?.fromEmail && <Text>{errors.fromEmail.message}</Text>}

            <Textarea
              {...register("message")}
              name="message"
              bgColor={brandColors.white + percentToHex(30)}
              className="col-span-2 row-span-3 rounded-b-xl resize-none p-2"
              placeholder="message"
              _placeholder={{ color: brandColors.lighterBlack + percentToHex(50) }}
            />
            {errors?.message && <Text>{errors.message.message}</Text>}

            <Button type="submit" mx={"auto"} gridColumn="span 2" className="bg-black hover:bg-black/60 transition text-white rounded-xl px-4 py-2">
              Send Message
            </Button>
          </SimpleGrid>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactMe;
