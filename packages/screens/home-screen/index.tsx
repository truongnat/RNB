import { createDrawerNavigator } from '@react-navigation/drawer';
import { DemoBox } from './demo/box';
import { DemoButton } from './demo/button';
import { DemoTypo } from './demo/typo';
import { DemoBoxAnimated } from './demo/box-animated';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Box" component={DemoBox} />
      <Drawer.Screen name="Box Animated" component={DemoBoxAnimated} />
      <Drawer.Screen name="Button" component={DemoButton} />
      <Drawer.Screen name="Typography" component={DemoTypo} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
