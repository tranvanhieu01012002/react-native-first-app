import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        flexDirection: "row",
    },
    itemText: {
        maxWidth: "80%",
    },
    circle: {
        height: 20,
        width: 20,
        backgroundColor: "#55BCF6",
        borderRadius: 5,
        borderWidth: 2,
    },
    row:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10
    }
});
export default styles;
