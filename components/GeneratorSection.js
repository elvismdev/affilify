import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Link,
  Button,
  useColorModeValue,
  Text,
  Container,
  Flex,
  ListItem,
  List,
  ListIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  Center,
} from "@chakra-ui/react";
import { CheckIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { TbHeartHandshake } from "react-icons/tb";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { FaRegSmileBeam } from "react-icons/fa";
import amazonlink from "ezamazonaffiliate";

export default function GeneratorSection() {
  const [amzProdUrl, setAmzProdUrl] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Container
          maxW={"lg"}
          bg={useColorModeValue("white", "whiteAlpha.100")}
          boxShadow={"xl"}
          rounded={"lg"}
          p={6}
          direction={"column"}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={(e) => {
              e.preventDefault();
              setError(false);
              setState("submitting");

              // remove this code and implement your submit logic right here
              setTimeout(() => {
                if (amzProdUrl === "https://www.google.com") {
                  setError(true);
                  setState("initial");
                  return;
                }

                // Testing convert function.
                setAmzProdUrl(
                  amazonlink(
                    amzProdUrl,
                    process.env.NEXT_PUBLIC_AMZ_TRACKING_ID
                  )
                );

                setState("success");
              }, 100);
            }}
          >
            <FormControl>
              <Input
                boxShadow={"base"}
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"amzprodurl"}
                type={"url"}
                required
                placeholder={"Your Amazon Product URL"}
                aria-label={"Your Amazon Product URL"}
                value={amzProdUrl}
                disabled={state !== "initial"}
                onChange={(e) => setAmzProdUrl(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                boxShadow={"base"}
                colorScheme={
                  state === "success" ? "amazonGreen" : "amazonOrange"
                }
                isLoading={state === "submitting"}
                w="100%"
                type={state === "success" ? "button" : "submit"}
              >
                {state === "success" ? (
                  <CheckIcon />
                ) : (
                  <>
                    <Text mr={1}>Affilify</Text>
                    <TbHeartHandshake />
                  </>
                )}
              </Button>
            </FormControl>
          </Stack>
          {error ? (
            <Text
              mt={6}
              textAlign={"center"}
              color={error ? "red.500" : "gray.500"}
            >
              Oh no an error occured! 😢 Please try again later.
            </Text>
          ) : state === "success" ? (
            <Alert
              mt={6}
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              borderRadius="lg"
              color={"gray.500"}
            >
              <ExternalLinkIcon boxSize="40px" mr={0} />
              <AlertTitle mr={0} mt={4} mb={1} fontSize="lg">
                Follow this link to your purchase!
              </AlertTitle>
              <AlertDescription maxWidth="100%">
                <Link textDecoration={"underline"} href={amzProdUrl} isExternal>
                  {amzProdUrl}
                </Link>
              </AlertDescription>
            </Alert>
          ) : null}
          <List textAlign={"center"} mb={5} mt={5} color={"gray.500"}>
            <ListItem>
              <ListIcon mr={0} as={RiNumber1} color="green.500" />
              <br />
              Paste the product URL.
            </ListItem>
            <ListItem>
              <ListIcon mr={0} as={RiNumber2} color="green.500" />
              <br />
              Click <b>Affilify</b>.
            </ListItem>
            <ListItem>
              <ListIcon mr={0} as={RiNumber3} color="green.500" />
              <br />
              Use the new link.
            </ListItem>
          </List>
          <Text textAlign={"center"} mb={1} color={"gray.500"}>
            I may receive a small commission from Amazon with NO extra cost to
            you!
          </Text>
          <Center color={"gray.500"}>
            <FaRegSmileBeam />
          </Center>
        </Container>
      </Flex>
      <Flex
        minH={"calc(100vh - 798.25px)"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      ></Flex>
    </>
  );
}
