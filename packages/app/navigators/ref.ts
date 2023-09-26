import { ApplicationStackParamList } from '@packages/@types';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef =
  createNavigationContainerRef<ApplicationStackParamList>();
