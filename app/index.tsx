import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import EmptyFile from "@/components/NoFiles";

export default function Index() {
    return (
        <View style={styles.container}>
            {<EmptyFile />}
            <View style={styles.pickerContainer}>
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
            <StatusBar style="auto" backgroundColor="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        margin: 20,
    },
    pickerButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        backgroundColor: Colors["light"].background,
        padding: 10,
        borderRadius: 50,
    },
    pickerContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
});
