import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

const getFilePDF = async () => {
    const document = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf"],
    });
    if (document.canceled === false) {
        const uri = document.assets[0].uri;
        FileSystem.writeAsStringAsync(
            uri,
            FileSystem.documentDirectory + "document.pdf",
            { encoding: "base64" }
        ).catch((err) => {
            console.log("failed!");
        });
    } else {
        return null;
    }
};

const getFileImg = async (func: Function, func2: Function) => {
    const img = await ImagePicker.launchImageLibraryAsync({ base64: true });
    if (img.canceled === false) {
        const uuid = uuidv4();
        const fileType = img.assets[0].mimeType?.split("/")[1];
        const imgRepr = img.assets[0].base64;
        const dir = "img/";
        const checkDir = await FileSystem.getInfoAsync(dir);
        if (!checkDir.exists) {
            await FileSystem.makeDirectoryAsync(
                FileSystem.documentDirectory + "img/",
                { intermediates: true }
            );
        }
        let uri = FileSystem.documentDirectory + "img/" + uuid + `.${fileType}`;
        FileSystem.writeAsStringAsync(uri, imgRepr!, {
            encoding: "base64",
        }).catch((err) => {
            console.log("failed!" + err);
        });
        console.log(uri);
        func(uri);
        func2("data:image/jpeg;base64," + imgRepr);
    } else {
        return null;
    }
};

export default function App() {
    const [uri, setURI] = useState();
    const [img, setImg] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.docViewer}>
                <Text style={styles.instText}>What are you uploading?</Text>
                <View style={styles.buttonArray}>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            getFileImg(setURI, setImg);
                        }}
                    >
                        <Text>Image</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={getFilePDF}>
                        <Text>PDF</Text>
                    </Pressable>
                </View>
                <Image
                    source={{ uri: img }}
                    style={{
                        width: 200,
                        height: 200,
                        borderColor: "red",
                        borderWidth: 2,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors["light"].background,
        padding: 25,
        paddingTop: 70,
    },
    docViewer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 25,
        borderStyle: "dashed",
        borderColor: Colors["dark"].icon,
    },
    instText: {
        fontFamily: "SecularOne-Regular",
        color: Colors["light"].text,
    },
    button: {
        alignItems: "center",
        backgroundColor: Colors["light"].button,
        borderRadius: 10,
        padding: 10,
    },
    buttonArray: {
        flexDirection: "row",
        gap: 10,
    },
});
