import { Modal, StyleSheet } from "react-native";
import { View, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import GoalImage from "../assets/goal.png";

export default GoalInput = (props) => {
    const [goal, setGoal] = useState("");

    const inputHandler = (goal) => {
        setGoal(goal);
    };

    const submitHandler = () => {
        props.onAction(goal);
        setGoal("");
    };

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.goalImage} source={GoalImage} />
                <TextInput
                    style={styles.textField}
                    onChangeText={inputHandler}
                    value={goal}
                    placeholder="Enter Your Goal"
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            color="#5e0acc"
                            onPress={submitHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="#f31282"
                            onPress={() => props.onCancel(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        backgroundColor: "#46269A",
    },
    goalImage: {
        height: 100,
        width: 100,
        margin: 20,
    },
    textField: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        borderRadius: 5,
        padding: 12,
        width: "80%",
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width: "35%",
        marginHorizontal: 5,
    },
});
