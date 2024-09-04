import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function NoFiles() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="spider-thread"
                size={200}
                style={{ color: Colors["light"].text }}
            />
            <Text style={styles.emptyMessage}>
                Nothing here. Start stacking!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignContent: "center", justifyContent: "center" },
    emptyMessage: {
        fontFamily: "SecularOne-Regular",
        color: Colors["light"].text,
    },
});
