import React, { useState } from "react";
import { View} from "react-native";
import PreviewLayout from "../components/PreviewLayout";
import styles from "../assets/screenStyle";


function FirstScreen() {
    const [direction, setDirection] = useState("ltr");
    return (
        <PreviewLayout
            label="direction"
            selectedValue={direction}
            values={["ltr", "rtl"]}
            setSelectedValue={setDirection}>
            <View
            style={[styles.box, { backgroundColor: "powderblue" }]}
            />
            <View
            style={[styles.box, { backgroundColor: "skyblue" }]}
            />
            <View
            style={[styles.box, { backgroundColor: "steelblue" }]}
            />
        </PreviewLayout>
    );
}

    

export default FirstScreen;