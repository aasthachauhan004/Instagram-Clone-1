import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} display={{ base: "block", md: "block" }}>
          {/* feed posts */}
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", md: "block" }}
          maxW={"300px"}
        >
          {/* suggested users */}
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};
export default HomePage;
