import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ image, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={"2"} borderRadius={4} overflow={"hidden"}>
        <Image src={image} alt='user profile pic' />
      </Box>
      <PostFooter username={username} />
    </>
  );
};
export default FeedPost;
