import React from 'react';
import { HomeScreen, SettingsScreen } from '@packages/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainParamsList } from '@packages/@types';
import { screenOptions } from '@packages/constants';

const Tab = createBottomTabNavigator<MainParamsList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions.hideHeader}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={screenOptions.showHeader}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
