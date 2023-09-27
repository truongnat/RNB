import { Box, Button, Typo } from '@packages/components/core';

export const DemoButton = () => {
  return (
    <Box w="full" h="full" shadow="3xl" p="12">
      <Box rounded="xl" w="full" h="full" p="16">
        <Typo variant="small">Variants:</Typo>

        <Button mt="12">
          <Typo>Default</Typo>
        </Button>

        <Button mt="12" variant="primary">
          <Typo color="white">Primary</Typo>
        </Button>

        <Button mt="12" variant="danger">
          <Typo color="white">Danger</Typo>
        </Button>

        <Button mt="12" variant="outline">
          <Typo>Outline</Typo>
        </Button>

        <Button mt="12" variant="invisible">
          <Typo>Invisible</Typo>
        </Button>
      </Box>
    </Box>
  );
};
