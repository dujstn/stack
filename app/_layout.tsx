import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "SecularOne-Regular": require("@/assets/fonts/SecularOne-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Drawer screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="index"
                options={{ drawerLabel: "Home", title: "Home" }}
            />  
        </Drawer>
    );
}
