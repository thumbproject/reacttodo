import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalContainer from "./components/GoalContainer";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goals, setGoals] = useState([]);

    const submitHandler = (item) => {
        setGoals((currentGoal) => [
            ...goals,
            { text: item, id: Math.random().toString() },
        ]);
        modalVisibilityHandler(false);
    };

    const deleteGoalHandler = (id) => {
        setGoals((currentGoal) => goals.filter((item) => item.id != id));
    };

    const modalVisibilityHandler = (status) => {
        setModalIsVisible(status);
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color=""
                    onPress={() => modalVisibilityHandler(true)}
                />
                <GoalInput
                    onAction={submitHandler}
                    isVisible={modalIsVisible}
                    onCancel={modalVisibilityHandler}
                />
                <View style={styles.goadContainer}>
                    <FlatList
                        data={goals}
                        renderItem={(itemData) => (
                            <GoalContainer
                                data={itemData.item.text}
                                id={itemData.item.id}
                                onDelete={deleteGoalHandler}
                            />
                        )}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                    ></FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#311b6b",
        padding: 50,
        flex: 1,
    },
    goadContainer: {
        flex: 8,
        marginHorizontal: 5,
    },
});
