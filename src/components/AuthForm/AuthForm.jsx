import { Box, VStack, Flex, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

        <VStack spacing={4}>
          {isLogin ? <Login /> : <Signup />}

          <Flex
            alignItems={"center"}
            justify-content={"Center"}
            my={4}
            gap={1}
            w={"full"}
          >
            {/* -------OR------- */}
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text px={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>
          {/* left side   */}
          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "don't have an Account" : "Already have an Account"}
          </Box>
          <Box
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default AuthForm;
