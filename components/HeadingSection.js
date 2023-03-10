import { Flex, Box, useColorModeValue, Heading, Text } from "@chakra-ui/react";

export default function HeadingSection() {
  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10, mb: 0 }}
        p={{ base: 5, lg: 16 }}
        textAlign={"center"}
      >
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
        >
          Amazon Affiliate Link Generator
        </Heading>
        <Text mt={2} fontSize="xl" mb={2} color={"gray.500"}>
          Let me refer you to your Amazon purchases!
        </Text>
      </Box>
    </Flex>
  );
}
