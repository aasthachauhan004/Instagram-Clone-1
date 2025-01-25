import {
  Container,
  Flex,
  VStack,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isloading &&
        [0, 1, 2, 3].map((item, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size='10' />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height='10px' w={"200px"} />
                <Skeleton height='10px' w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isloading && (
        <>
          <FeedPost username='janedoe' image='/img1.png' avatar='/img1.png' />
          <FeedPost
            username='burakorkmaeaz'
            image='/img2.png'
            avatar='/img2.png'
          />
          <FeedPost username='josh' image='/img3.png' avatar='/img3.png' />
          <FeedPost username='joshdoe' image='/img4.png' avatar='/img4.png' />
        </>
      )}
    </Container>
  );
};
export default FeedPosts;
