import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';



const TabNavigator=()=>{
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
        <Tab.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>

    )

}


export default TabNavigator