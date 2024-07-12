import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
      <Skeleton height="42px" />
    </Stack>
  );
};

export default ChatLoading;
