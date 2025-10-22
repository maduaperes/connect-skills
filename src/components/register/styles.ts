import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1220",
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 28,
        color: "#fff",
        marginBottom: 24,
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        backgroundColor: "#111827",
        color: "#fff",
        borderRadius: 8,
        padding: 14,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#1f2937",
    },
    button: {
        width: "100%",
        backgroundColor: "#2563eb",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        color: "#aaa",
        fontSize: 14,
        marginTop: 16,
    },
    linkHighlight: {
        color: "#3b82f6",
        fontWeight: "600",
    },
});
