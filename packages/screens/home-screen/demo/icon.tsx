import { Box, Icon, Typo } from '@packages/components/core';

export const DemoIcon = () => {
  return (
    <Box w="full" h="full" p="12">
      <Box bg="gray.200" rounded="xl" w="full" h="full" p="16">
        <Typo variant="small">Icons:</Typo>
        <Box flexDirection="row" flexWrap="wrap" gap={12} mt={'12'}>
          <Icon iconName="home" size={56} fill={'green'} />
          <Icon iconName="home" size={40} fill={'orange'} />
          <Icon iconName="home" size={32} fill={'purple'} />
          <Icon iconName="home" size={28} fill={'red'} />
          <Icon iconName="home" fill={'skyblue'} />
          <Icon iconName="home" size={20} fill={'teal'} />
        </Box>
        <Box flexDirection="row" flexWrap="wrap" gap={12} mt={'12'}>
          <Icon iconName="settings" size={56} rounded="full" fill={'green'} />
          <Icon iconName="settings" size={40} rounded="full" fill={'orange'} />
          <Icon iconName="settings" size={32} rounded="full" fill={'purple'} />
          <Icon iconName="settings" size={28} rounded="full" fill={'red'} />
          <Icon iconName="settings" rounded="full" fill={'skyblue'} />
          <Icon iconName="settings" size={20} rounded="full" fill={'teal'} />
        </Box>
      </Box>
    </Box>
  );
};
