import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import NoFile from "@/components/NoFiles";
import LogoHeader from "@/components/LogoHeader";

export default function Index() {
    return (
        <View style={styles.container}>
            <LogoHeader title={"stack"} />
            {<NoFile />}
            <View style={styles.pickerContainer}>
                <Link href={"/picker"} asChild>
                    <Pressable style={styles.pickerButton}>
                        <AntDesign
                            name="plus"
                            size={24}
                            color={Colors["light"].icon}
                        />
                    </Pressable>
                </Link>
            </View>
            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors["light"].background,
        padding: 25,
    },
    pickerButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        backgroundColor: Colors["light"].button,
        padding: 10,
        borderRadius: 50,
    },
    pickerContainer: {
        position: "absolute",
        margin: 20,
        bottom: 0,
        right: 0,
    },
});
