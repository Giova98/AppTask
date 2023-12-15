import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Task from "./Task";
import { NewTask } from "./NewTask";

const Tab = createMaterialBottomTabNavigator(Task);

const Menu = () =>{

    return(
        <Tab.Navigator
          tabBarActivateBackgroundColor = "#fff"
          activeColor="#000"
          inactiveColor="#95a5a6"
          barStyle = {style.navigatorBar}
        >

          <Tab.Screen>
            name="Tareas"
            component={Task}
            options={{
                tabBarLabel: "Tareas",
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="view-list" color="#000" size={24}/>
                )
                }} 
          </Tab.Screen>
          
          <Tab.Screen>
            name="Nueva Tarea"
            component={NewTask}
            options={{
                tabBarLabel: "Nueva Tareas",
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" color="#000" size={24}/>
                )
                }} 
           </Tab.Screen>

        </Tab.Navigator>

    )
}

const style = StyleSheet.create ({
    navigatorbar: {
        backgroundColor: "#fff",
    },
});

export default Menu;