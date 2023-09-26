import { ApplicationScreenProps } from '@packages/@types';
import { useTheme } from '@packages/theme';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

const FlashScreen = ({ navigation }: ApplicationScreenProps) => {
  const { theme } = useTheme();

  const init = async () => {
    await new Promise((resolve) =>
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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
};

export default FlashScreen;
