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
import { timeAgo } from "../../utils/timeAlgo";
import CommentsModal from "../Comment/CommentsModal";

const PostFooter = ({ post, username, isProfilePage, creatorProfile }) => {
  const commentRef = useRef(null);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const { handleLikePost, isLiked, isUpdating, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        {isProfilePage && (
          <Text fontSize={12} color={"grey"}>
            Posted {timeAgo(post.createdAt)}
          </Text>
        )}
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize='sm' fontWeight={700}>
            {creatorProfile?.username}{" "}
            <Text as='span' fontWeight='400'>
              {post.caption}
            </Text>
          </Text>

          {post.comments.length > 0 && (
            <Text
              fontSize='sm'
              color={"gray"}
              cursor={"pointer"}
              onClick={onOpen}
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {/* CommentsModal only on HomePage */}
          {isOpen ? (
            <CommentsModal
              isOpen={isOpen}
              onClose={onClose}
              post={post}
            ></CommentsModal>
          ) : null}
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
