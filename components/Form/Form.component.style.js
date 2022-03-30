import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: 180,
        justifyContent: 'space-between',
        alignItems: 'stretch',
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
    input: {
        // border: ,
        // borderBottomColor: 'red',
    },
    btn: {
        backgroundColor: '#4630EB',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        textAlign: "center",
    }
});