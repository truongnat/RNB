import { createDrawerNavigator } from '@react-navigation/drawer';
import { DemoBox } from './demo/box';
import { DemoButton } from './demo/button';
import { DemoTypo } from './demo/typo';
import { DemoBoxAnimated } from './demo/box-animated';
import { DemoIcon } from './demo/icon';
import { DemoAvatar } from './demo/avatar';
import { DemoInput } from './demo/input';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Box" component={DemoBox} />
      <Drawer.Screen name="Box Animated" component={DemoBoxAnimated} />
      <Drawer.Screen name="Button" component={DemoButton} />
      <Drawer.Screen name="Input" component={DemoInput} />
      <Drawer.Screen name="Typography" component={DemoTypo} />
      <Drawer.Screen name="Icon" component={DemoIcon} />
      <Drawer.Screen name="Avatar" component={DemoAvatar} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
