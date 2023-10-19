import { Box, Button, Icon, Typo } from '@packages/components/core';
import { GetComponentVariantToken } from '@packages/theme';

export const DemoButton = () => {
  const variants: GetComponentVariantToken<'button'>[] = [
    'default',
    'primary',
    'danger',
    'outline',
    'invisible',
  ];
  return (
    <Box w="full" h="full" p="12">
      <Box bg="gray.200" rounded="xl" w="full" h="full" p="16">
        <Typo variant="small">Variants:</Typo>
        {variants.map(variant => (
          <Button mt="12" key={variant} variant={variant}>
            {variant}
          </Button>
        ))}

        <Typo variant="small">No animation:</Typo>
        <Button mt="12" scale="none">
          No animation
        </Button>

        <Typo variant="small">Visual:</Typo>

        <Button mt="12" leadingVisual={<Typo>👋</Typo>}>
          Leading visual
        </Button>

        <Button mt="12" trailingVisual={<Icon name="settings" />}>
          Trailing visual
        </Button>

        <Typo variant="small">Loading:</Typo>

        <Button mt="12" isLoading />
      </Box>
    </Box>
  );
};
