import { ApplicationScreenProps } from '@packages/@types';
import { useEffect } from 'react';
import { Box, Typo } from '@packages/components/core';

const FlashScreen = ({ navigation }: ApplicationScreenProps) => {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Box
      flex={1}
      bg={'primary'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typo>Loading...</Typo>
    </Box>
  );
};

export default FlashScreen;
