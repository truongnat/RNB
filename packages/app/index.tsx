import { useTheme } from '@packages/theme';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from '@packages/@types';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigators/ref';
import { MainNavigator } from './navigators';
import { FlashScreen } from '@packages/screens';
import { screenOptions } from '@packages/constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyles } from '@packages/theme';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

export function App() {
  const { isDark, theme } = useTheme();

  const styles = createStyles(() => ({
    flex1: {
      flex: 1,
    },
    background: {
      backgroundColor: isDark ? theme.colors.black : theme.colors.white,
    },
  }));

  return (
    <GestureHandlerRootView style={styles.flex1}>
      <SafeAreaView style={[styles.flex1, styles.background]}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={screenOptions.hideHeader}>
            <Stack.Screen name="Flash" component={FlashScreen} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
