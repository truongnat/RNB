import { Box, Button, Typo } from '@packages/components/core';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const BoxAnimated = Animated.createAnimatedComponent(Box);

export const DemoBoxAnimated = () => {
  const width = useSharedValue(200);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const handleReset = () => {
    width.value = withSpring(200);
  };

  return (
    <BoxAnimated
      h={'xs'}
      bg={'gray.200'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      alignSelf={'center'}
      mt={'52'}
      rounded={'xl'}
      style={{ width }}
    >
      <Button onPress={handlePress}>
        <Typo>Increment</Typo>
      </Button>
      <Button variant={'danger'} mt={'12'} onPress={handleReset}>
        <Typo color={'white'}>Reset</Typo>
      </Button>
    </BoxAnimated>
  );
};
