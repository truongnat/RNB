const Images = {
  logo: require('./logo.png'),
  avatar: require('./avatar.png'),
};

export type ImagesName = keyof typeof Images;

export default Images;
