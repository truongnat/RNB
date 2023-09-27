import { Box, Typo } from '@packages/components/core';

export const DemoBox = () => {
  return (
    <Box
      bg="gray.200"
      w="xs"
      h="xs"
      shadow="base"
      alignSelf={'center'}
      justifyContent={'center'}
      alignItems={'center'}
      rounded={'xl'}
      mt={'96'}
    >
      <Typo>Demo Box</Typo>
    </Box>
  );
};
