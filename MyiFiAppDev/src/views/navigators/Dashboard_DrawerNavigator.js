import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScreen} from '../screens/Dashboard/drawer/DrawerContentScreen';
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import { Android_Theme_Light } from '../../styles/Themes';
import Index from './NavIndex';

const Drawer = createDrawerNavigator();

export default function Dashboard_DrawerNavigator() {

    return (
        
        <Drawer.Navigator
            screenOptions={{
                drawerPosition:'left', 
                headerShown:false, 
                drawerStyle:{width:'80%', marginTop:70, 
                    backgroundColor: Android_Theme_Light.GRAY_COLOR, 
                    borderTopRightRadius:25, borderBottomRightRadius:25, opacity:0.9}}}
                drawerContent={(props) => <DrawerContentScreen {...props} />}
                navigationOptions={{gestureEnabled: false}}>

            <Drawer.Screen name={Index.DASHBOARD_DRAWER} component={DashboardScreen} />

        </Drawer.Navigator>
    
    );
}