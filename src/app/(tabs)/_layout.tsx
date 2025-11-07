import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#111827",
            tabBarInactiveTintColor: "#6B7280",
            tabBarStyle:{backgroundColor: "#fff",borderTopWidth: 0.5},
        }}
        >
            <Tabs.Screen name="home" options={{
                title: "Inicio",
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home-outline" color={color} size={size}  />
                ),
            }} 
            />  
        </Tabs>
    );
}
