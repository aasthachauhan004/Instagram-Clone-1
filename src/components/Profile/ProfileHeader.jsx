import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  console.log(JSON.parse(localStorage.getItem("user-info")));
  console.log(authUser);
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;
  //console.log(visitingOwnProfileAndAuth);
  console.log(authUser);

  return (
    <>
      <Flex
        gap={{ base: 4, md: 10 }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar
            src={userProfile.profilePicURL}
            alt='As a programmer logo'
          ></Avatar>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}>
              {userProfile.username}
            </Text>

            {visitingOwnProfileAndAuth && (
              <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                <Button
                  bg={"white"}
                  color={"black"}
                  _hover={{ bg: "whiteAlpha.800" }}
                  size={{ base: "xs", md: "sm" }}
                >
                  Edit Profile
                </Button>
              </Flex>
            )}
            {visitingAnotherProfileAndAuth && (
              <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                <Button
                  bg={"white"}
                  color={"black"}
                  _hover={{ bg: "whiteAlpha.800" }}
                  size={{ base: "xs", md: "sm" }}
                >
                  Follow
                </Button>
              </Flex>
            )}
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, md: 4 }}>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as='span' fontWeight={"bold"} mr={1}>
                {userProfile.posts.length}
              </Text>
              Posts
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.followers.length}
              </Text>
              Followers
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.following.length}
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {userProfile.fullName}
            </Text>
          </Flex>
          <Text fontSize={"sm"}>{userProfile.bio}</Text>
        </VStack>
      </Flex>
    </>
  );
};
export default ProfileHeader;
