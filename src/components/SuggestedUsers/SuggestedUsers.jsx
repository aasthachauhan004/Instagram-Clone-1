import { VStack, Flex, Box, Text } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name='Dan Abrahmov'
        followers={1392}
        avatar={"https://bit.ly/dan-abramov"}
      />
      <SuggestedUser
        name='Ryan Florence'
        followers={345}
        avatar={"https://bit.ly/ryan-florence"}
      />
      <SuggestedUser
        name='Cristan Nwamba'
        followers={792}
        avatar={"https://bit.ly/code-beast"}
      />
      <Box fontSize={12} color={"gray.500"} mt={5}>
        built by{" "}
        <Link
          href='https://github.com/aasthachauhan004'
          target='_blank'
          color='blue.500'
          fontSize={14}
        >
          Aastha Chauhan
        </Link>
      </Box>
    </VStack>
  );
};
export default SuggestedUsers;
