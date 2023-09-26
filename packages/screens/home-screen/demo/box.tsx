import { Box } from '@packages/components/core';
import { useTheme } from '@packages/theme';
import { Text, View } from 'react-native';

export const DemoBox = () => {
  return (
    <Box bg="gray.500" w="xs" h="xs" shadow="base">
      <Text>Demo Box</Text>
    </Box>
  );
};
