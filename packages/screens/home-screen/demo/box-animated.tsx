import { Box, Button, Typo } from '@packages/components/core';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const BoxAnimated = Animated.createAnimatedComponent(Box);

export const DemoBoxAnimated = () => {
  const width = useSharedValue(250);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const handleReset = () => {
    width.value = withSpring(250);
  };

  return (
    <Box
      w="full"
      h="full"
      alignSelf="center"
      alignItems={'center'}
      justifyContent={'center'}
      p="12"
    >
      <BoxAnimated
        bg="gray.200"
        rounded="xl"
        w="full"
        h="xs"
        p="16"
        alignSelf="center"
        alignItems={'center'}
        justifyContent={'center'}
        style={{ width }}
      >
        <Button onPress={handlePress}>
          <Typo>Increment</Typo>
        </Button>
        <Button variant={'danger'} mt={'12'} onPress={handleReset}>
          <Typo color={'white'}>Reset</Typo>
        </Button>
      </BoxAnimated>
    </Box>
  );
};
