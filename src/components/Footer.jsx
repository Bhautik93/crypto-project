import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      pY={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}></VStack>
        <Text fontWeight={"bold"}>About US</Text>
        <Text
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}
          mr={"100"}
        >
          We are the best crypto trading app in India, we provide our guidence
          at a very cheap price.
        </Text>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
