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
import { useRef, useState } from "react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";

import useAuthStore from "../../store/authStore";
import usePostComment from "../../hooks/usePostComment";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, username, isProfilePage }) => {
  const commentRef = useRef(null);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const { handleLikePost, isLiked, isUpdating, likes } = useLikePost(post);
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={10}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => {
            commentRef.current.focus();
          }}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize='sm' fontWeight={600}>
        {likes} Likes
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

      {authUser && (
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
              ref={commentRef}
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
      )}
    </Box>
  );
};
export default PostFooter;
