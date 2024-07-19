import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Index() {
    const colorScheme = useColorScheme();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href={"/picker"} asChild>
                <Pressable style={styles.pickerButton}>
                    <AntDesign
                        name="plus"
                        size={24}
                        color={Colors["dark"].icon}
                    />
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerButton: {
        height: 50,
        width: 50,
        backgroundColor: Colors["light"].background,
        padding: 10,
        borderRadius: 50,
    },
});
