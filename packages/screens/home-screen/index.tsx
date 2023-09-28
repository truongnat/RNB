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
      <Drawer.Screen name="Form" component={DemoBox} />
      <Drawer.Screen name="Pin Input" component={DemoBox} />
      <Drawer.Screen name="Range" component={DemoBox} />
      <Drawer.Screen name="Radio" component={DemoBox} />
      <Drawer.Screen name="Checkbox" component={DemoBox} />
      <Drawer.Screen name="Select" component={DemoBox} />
      <Drawer.Screen name="Switch" component={DemoBox} />
      <Drawer.Screen name="Spinner" component={DemoBox} />
      <Drawer.Screen name="Dropdown" component={DemoBox} />
      <Drawer.Screen name="Badge" component={DemoBox} />
      <Drawer.Screen name="Card" component={DemoBox} />
      <Drawer.Screen name="List" component={DemoBox} />
      <Drawer.Screen name="Table" component={DemoBox} />
      <Drawer.Screen name="Dialog" component={DemoBox} />
      <Drawer.Screen name="Toast" component={DemoBox} />
      <Drawer.Screen name="Tag" component={DemoBox} />
      <Drawer.Screen name="Alert" component={DemoBox} />
      <Drawer.Screen name="Circular Progress" component={DemoBox} />
      <Drawer.Screen name="Process" component={DemoBox} />
      <Drawer.Screen name="Skeleton" component={DemoBox} />
      <Drawer.Screen name="Highlight" component={DemoBox} />
      <Drawer.Screen name="Tooltip" component={DemoBox} />
      <Drawer.Screen name="Modal" component={DemoBox} />
      <Drawer.Screen name="Popover" component={DemoBox} />
      <Drawer.Screen name="Accordion" component={DemoBox} />
      <Drawer.Screen name="Tabs" component={DemoBox} />
      <Drawer.Screen name="Carousel" component={DemoBox} />
      <Drawer.Screen name="Steps" component={DemoBox} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
