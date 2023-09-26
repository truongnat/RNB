const systemSpacing = {
  m: {
    property: 'margin',
    scale: 'spacing',
  },
  mt: {
    property: 'marginTop',
    scale: 'spacing',
  },
  mr: {
    property: 'marginRight',
    scale: 'spacing',
  },
  mb: {
    property: 'marginBottom',
    scale: 'spacing',
  },
  ml: {
    property: 'marginLeft',
    scale: 'spacing',
  },
  mx: {
    // properties: "marginHorizontal",
    properties: ['marginLeft', 'marginRight'],
    scale: 'spacing',
  },
  my: {
    // properties: "marginVertical",
    properties: ['marginTop', 'marginBottom'],
    scale: 'spacing',
  },
  p: {
    property: 'padding',
    scale: 'spacing',
  },
  pt: {
    property: 'paddingTop',
    scale: 'spacing',
  },
  pr: {
    property: 'paddingRight',
    scale: 'spacing',
  },
  pb: {
    property: 'paddingBottom',
    scale: 'spacing',
  },
  pl: {
    property: 'paddingLeft',
    scale: 'spacing',
  },
  px: {
    // properties: "paddingHorizontal",
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'spacing',
  },
  py: {
    // properties: "paddingVertical",
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'spacing',
  },
  top: {
    property: 'top',
    scale: 'spacing',
  },
  right: {
    property: 'right',
    scale: 'spacing',
  },
  bottom: {
    property: 'bottom',
    scale: 'spacing',
  },
  left: {
    property: 'left',
    scale: 'spacing',
  },
} as const;

const systemSizes = {
  w: {
    property: 'width',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  borderW: {
    property: 'borderWidth',
    scale: 'sizes',
  },
  borderTop: {
    property: 'borderTopWidth',
    scale: 'sizes',
  },
  borderRight: {
    property: 'borderRightWidth',
    scale: 'sizes',
  },
  borderBottom: {
    property: 'borderBottomWidth',
    scale: 'sizes',
  },
  borderLeft: {
    property: 'borderLeftWidth',
    scale: 'sizes',
  },
} as const;

const systemRadii = {
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
} as const;

const systemColors = {
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  color: {
    property: 'color',
    scale: 'colors',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },

  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
} as const;

const systemUnScale = {
  textAlgin: {
    property: 'textAlign',
  },
  fontStyle: {
    property: 'fontStyle',
  },
  textDecorationLine: {
    property: 'textDecorationLine',
  },
  textDecorationStyle: {
    property: 'textDecorationStyle',
  },
  textDecorationColor: {
    property: 'textDecorationColor',
  },
  textTransform: {
    property: 'textTransform',
  },
  pos: {
    property: 'position',
  },
} as const;

export const systemConfigs = {
  ...systemSpacing,
  ...systemSizes,
  ...systemRadii,
  ...systemColors,
  ...systemUnScale,
  font: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fs: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fw: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lh: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  ls: {
    property: 'letterSpacing',
    scale: 'letterSpacings' as const,
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  zIndex: {
    property: 'zIndex',
    scale: 'indices',
  },
} as const;
