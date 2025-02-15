import {
  Box,
  Flex,
  InputGroup,
  Text,
  Button,
  Input,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import { color } from "framer-motion";
import useAuthStore from "../../store/authStore";
import usePostComment from "../../hooks/usePostComment";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [isliked, setIsliked] = useState(false);
  const [likes, setLikes] = useState("1000");
  const [comment, setComment] = useState("");
  const { isCommenting, handlePostComment } = usePostComment();
  const handleLike = () => {
    setIsliked(!isliked);
    if (isliked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
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
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></Input>
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
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
