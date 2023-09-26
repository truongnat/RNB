import { ApplicationScreenProps } from '@packages/@types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DemoBox } from './demo/box';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DemoBox" component={DemoBox} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
