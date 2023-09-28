import { Box, Avatar, Typo } from '@packages/components/core';

export const DemoAvatar = () => {
  return (
    <Box p="12" bg="white">
      <Box bg="gray.100" shadow="base" rounded={'xl'} h={'full'} p="12">
        <Typo variant="small">Square:</Typo>
        <Box
          flexDirection="row"
          gap={16}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Avatar mt="12" variant="large" />
          <Avatar mt="12" variant="medium" />
          <Avatar mt="12" variant="default" />
          <Avatar mt="12" variant="small" />
        </Box>

        <Typo variant="small" mt="24">
          Rounded:
        </Typo>
        <Box
          flexDirection="row"
          gap={16}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Avatar mt="12" imageName="logo" variant="large" square={false} />
          <Avatar mt="12" imageName="logo" variant="medium" square={false} />
          <Avatar mt="12" imageName="logo" variant="default" square={false} />
          <Avatar mt="12" imageName="logo" variant="small" square={false} />
        </Box>
      </Box>
    </Box>
  );
};
