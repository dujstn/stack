import { Colors } from "@/constants/Colors";
import { Text, StyleSheet } from "react-native";

interface Props {
    title: React.ReactNode;
}

export default function LogoHeader({ title }: Props) {
    return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        left: 0,
        top: 0,
        margin: 25,
        marginTop: 50,
        fontFamily: "SecularOne-Regular",
        fontSize: 32,
        color: Colors["light"].text,
    },
});
