import {
  Box,
  Flex,
  Container,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container as={Stack} maxW={"6xl"}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box fontWeight={"700"} fontSize={"2xl"}>
              <Link href="/">Affilify.me</Link>
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
