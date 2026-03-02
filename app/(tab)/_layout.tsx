import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { theme } from "../../styles/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.border,
        tabBarStyle: {
          height: 63,
          paddingBottom: 8,
          backgroundColor: theme.colors.bg,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "HOME",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watch"
        options={{
          tabBarLabel: "WATCH",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "phone-portrait" : "phone-portrait-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "SEARCH",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="canvas"
        options={{
          tabBarLabel: "CANVAS",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="subscribed"
        options={{
          tabBarLabel: "My",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}