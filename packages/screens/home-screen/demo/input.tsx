import { Box, Typo, Input } from '@packages/components/core';
import { GetComponentVariantToken } from '@packages/theme';

export const DemoInput = () => {
  const variants: GetComponentVariantToken<'input'>[] = [
    'default',
    'filled',
    'flushed',
    'outline',
  ];

  return (
    <Box p="12" bg="white">
      <Box bg="gray.100" shadow="base" rounded={'xl'} h={'full'} p="12">
        <Typo variant="small">Variants:</Typo>
        <Box
          flexDirection="column"
          gap={16}
          alignItems="flex-start"
          justifyContent="flex-start"
          flex={1}
          mt={'16'}
        >
          {variants.map(variant => (
            <Input label={variant} key={variant} variant={variant} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
