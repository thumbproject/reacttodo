import { View, Text, StyleSheet, Pressable } from "react-native";

export default GoalContainer = (props) => {
    return (
        <Pressable
            android_ripple={{ color: "#210644" }}
            style={styles.goalText}
            onPress={() => props.onDelete(props.id)}
        >
            <View>
                <Text style={styles.textStyle}>{props.data}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    goalText: {
        marginVertical: 5,
        backgroundColor: "#5e0acc",
        borderRadius: 5,
    },
    textStyle: {
        color: "#fff",
        padding: 10,
    },
});
