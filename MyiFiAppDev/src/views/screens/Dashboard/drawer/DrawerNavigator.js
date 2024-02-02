import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from '../../DashboardScreen/DashboardScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (
        
            <Drawer.Navigator
                drawerPosition={'right'}
                drawerStyle={{width: "80%"}}
                drawerContent={(props) => <DrawerContent {...props} />}>

                <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />

            </Drawer.Navigator>
       
    );
}