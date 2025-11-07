import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
    paddingHorizontal: 20,
    paddingTop: 60, 
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },

  selectList: {
    width: "100%",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 40,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
