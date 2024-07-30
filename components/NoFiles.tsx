import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function NoFiles() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="spider-thread"
                size={200}
                style={{ color: Colors["dark"].icon }}
            />
            <Text style={styles.emptyMessage}>
                Nothing here. Start stacking!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignContent: "center", justifyContent: "center" },
    emptyMessage: { color: "blue" },
});
