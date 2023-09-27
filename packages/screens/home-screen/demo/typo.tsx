import { Box, Typo } from '@packages/components/core';
import { GetComponentVariantToken } from '@packages/theme';

export const DemoTypo = () => {
  const variants: GetComponentVariantToken<'typo'>[] = [
    'display',
    'large',
    'medium',
    'small',
    'subTitle',
    'bodyL',
    'bodyM',
    'bodyS',
    'caption',
    'default',
  ];

  const displayNames: Record<GetComponentVariantToken<'typo'>, string> = {
    display: 'Display',
    large: 'Large',
    medium: 'Medium',
    small: 'Small',
    subTitle: 'Sub Title',
    bodyL: 'Body L',
    bodyM: 'Body M',
    bodyS: 'Body S',
    caption: 'Caption',
    default: 'Default',
  };

  return (
    <Box w="full" h="full" shadow="3xl" p="12">
      <Box bg="gray.200" rounded="xl" w="full" h="full" p="16">
        {variants.map(variant => (
          <Typo variant={variant} key={variant}>
            {displayNames[variant]}
          </Typo>
        ))}
      </Box>
    </Box>
  );
};
