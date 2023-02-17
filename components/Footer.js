import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          Copyright © {currentYear()} by{" "}
          <Link
            textDecoration={"underline"}
            href={"https://elvismdev.io"}
            isExternal
          >
            Elvis Mørales
          </Link>
          . All rights reserved.
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Image
            width="100px"
            src="/amazon-associates-logo.png"
            alt="Amazon Associates Logo"
          />
        </Stack>
      </Container>
    </Box>
  );
}
