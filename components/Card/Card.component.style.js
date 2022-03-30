import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2, }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    deleteBtn: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    }
});