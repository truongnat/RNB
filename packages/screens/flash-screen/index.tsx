import { ApplicationScreenProps } from '@packages/@types';
import { useEffect } from 'react';
import { Box, Typo } from '@packages/components/core';
import { useTextLoading } from '@packages/hooks';

const FlashScreen = ({ navigation }: ApplicationScreenProps) => {
  const loadingText = useTextLoading();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 3000),
    );

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      flex={1}
      bg={'primary'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typo>{loadingText}</Typo>
    </Box>
  );
};

export default FlashScreen;
