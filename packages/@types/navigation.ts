import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainParamsList = {
  Home: undefined;
  Settings: undefined;
};

export type ApplicationStackParamList = {
  Flash: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  NativeStackScreenProps<ApplicationStackParamList>;
