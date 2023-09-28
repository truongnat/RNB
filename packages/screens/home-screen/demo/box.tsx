import { Box, Typo } from '@packages/components/core';

export const DemoBox = () => {
  return (
    <Box w="full" h="full" p="12">
      <Box
        bg="gray.200"
        rounded="xl"
        w="full"
        h="full"
        p="16"
        justifyContent="center"
        alignItems="center"
      >
        <Typo>Demo Box</Typo>
      </Box>
    </Box>
  );
};
