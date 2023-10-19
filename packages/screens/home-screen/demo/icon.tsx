import { Box, Icon, Typo } from '@packages/components/core';

export const DemoIcon = () => {
  return (
    <Box w="full" h="full" p="12">
      <Box bg="gray.200" rounded="xl" w="full" h="full" p="16">
        <Typo variant="small">Icons:</Typo>
        <Box flexDirection="row" flexWrap="wrap" gap={12} mt={'12'}>
          <Icon name="home" size={56} fill={'green'} />
          <Icon name="home" size={40} fill={'orange'} />
          <Icon name="home" size={32} fill={'purple'} />
          <Icon name="home" size={28} fill={'red'} />
          <Icon name="home" fill={'skyblue'} />
          <Icon name="home" size={20} fill={'teal'} />
        </Box>
        <Box flexDirection="row" flexWrap="wrap" gap={12} mt={'12'}>
          <Icon name="settings" size={56} fill={'green'} />
          <Icon name="settings" size={40} fill={'orange'} />
          <Icon name="settings" size={32} fill={'purple'} />
          <Icon name="settings" size={28} fill={'red'} />
          <Icon name="settings" fill={'skyblue'} />
          <Icon name="settings" size={20} fill={'teal'} />
        </Box>
      </Box>
    </Box>
  );
};
