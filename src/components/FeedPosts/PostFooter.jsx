import {
  Box,
  Flex,
  InputGroup,
  Text,
  Button,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import { color } from "framer-motion";

const PostFooter = ({ username, isProfilePage }) => {
  const [isliked, setIsliked] = useState(false);
  const [likes, setLikes] = useState("1000");
  const handleLike = () => {
    setIsliked(!isliked);
    if (isliked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={10}>
          {!isliked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize='sm' fontWeight={600}>
        {likes}Likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize='sm' fontWeight={700}>
            {username}{" "}
            <Text as='span' fontWeight='400'>
              Felling Good
            </Text>
          </Text>

          <Text fontSize='sm' color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment...."}
            fontSize={14}
            cursor={"pointer"}
          ></Input>
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};
export default PostFooter;
