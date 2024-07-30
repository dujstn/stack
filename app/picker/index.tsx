import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import * as DocumentPicker from "expo-document-picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";

const getFile = async () => {
    const document = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
    });
    if (document.canceled === false) {
        return document.assets[0].size;
    } else {
        return null;
    }
};

export default function App() {
    const [docSize, setSize] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.docViewer}></View>
            <View style={styles.pickerContainer}>
                <Pressable style={styles.pickerButton} onPress={getFile}>
                    <AntDesign
                        name="plus"
                        size={24}
                        color={Colors["dark"].icon}
                    />
                </Pressable>
                <Text>Upload a PDF</Text>
            </View>
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
    docViewer: {
        borderWidth: 2,
        borderRadius: 25,
        borderStyle: "dashed",
        borderColor: Colors["dark"].icon,
        flex: 1,
    },
    pickerContainer: {
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
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
});
